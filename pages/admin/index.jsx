import IsAdmin from "@/components/hoc/IsAdmin";
import AdminLayout from "@/components/layouts/AdminLayout";

export default function PurchaseManagementPage() {
  return <div>PurchaseManagementPage</div>;
}

PurchaseManagementPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
