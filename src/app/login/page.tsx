import Auth from "@/components/Auth/Auth";

export const dynamic = 'force-dynamic'

const Page = async() => {


  return (
    <div className="h-[68vh] flex items-center justify-center">
      <Auth />
    </div>
  );
};

export default Page;
