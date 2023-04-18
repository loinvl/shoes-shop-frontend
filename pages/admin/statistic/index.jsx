import AdminLayout from "@/components/layouts/AdminLayout";

export default function StatisticPage() {
    return <div>StatisticPage</div>
}

StatisticPage.getLayout = (page) => {
    return <AdminLayout>{page}</AdminLayout>;
  };