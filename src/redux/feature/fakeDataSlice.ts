import { CarCardProps } from "@/lib/definitions";
import { createSlice } from "@reduxjs/toolkit";
import {
  addToFavorites,
  carFilterAction,
  carSearchAction,
  signinUser,
  signoutUser,
} from "./fakeDataActions";
import toast from "react-hot-toast";
import cars from "@/app/api/Data";

export type fakeData = {
  car: CarCardProps[];
  user: {
    name: string;
    email: string;
    isLike: null | string[];
    password: null | string;
  } | null;
  loading: boolean;
  error: any;
  filterCar: CarCardProps[] | null;
};

const initialState: fakeData = {
  car: cars,
  user: null,
  loading: false,
  error: null,
  filterCar: null,
};

const staticDataCar = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signinUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        toast.success("welcome, successfully logged in!");
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error?.message;
      });
    builder
      .addCase(addToFavorites.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.loading = false;
        if (state.user == null) {
          toast.error("first you need to Login!");
          window.location.href = "/login";
        } else {
          if (state.user?.isLike?.includes(action.payload)) {
            let usersLike = state.user.isLike?.filter(
              (s) => s != action.payload
            );
            state.user.isLike = usersLike;
            toast.success("successfully removed from favorites!");
          } else {
            state.user?.isLike?.push(action.payload);
            toast.success("successfully added to favorites!");
          }
        }
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(carFilterAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(carFilterAction.fulfilled, (state, action) => {
        state.loading = false;

        const carType = action.payload.type?.map((c) => c.toLocaleLowerCase());
        const capacityType = action.payload.capacity?.map((c) =>
          c.toLocaleLowerCase()
        );

        let capacityfilterCar = state.car.filter((car) =>
          capacityType?.includes(car.capacity.toLowerCase().trim())
        );
        console.log(capacityfilterCar);
        let typefilterCar = state.car.filter((car) =>
          carType?.includes(car.type.toLocaleLowerCase().trim())
        );

        state.filterCar = [...capacityfilterCar, ...typefilterCar];
      })
      .addCase(carFilterAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(carSearchAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(carSearchAction.fulfilled, (state, action) => {
        state.loading = false;
        state.filterCar = state.car.filter((car) =>
          car.name
            .toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase())
        );
      })
      .addCase(carSearchAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(signoutUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(signoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = staticDataCar.actions;
export default staticDataCar.reducer;
