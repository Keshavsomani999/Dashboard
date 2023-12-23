import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img =
  "https://imgv3.fotor.com/images/gallery/the-before-and-after-effect-of-removing-the-white-shoe-product-image-background.png";
const img2 =
  "data:image/jpeg;base64,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";

const arr: DataType[] = [
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma shoes",
    price: 690,
    stock: 3,
    action: <Link to={"/admin/product/aaaa"}>Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 69000,
    stock: 5,
    action: <Link to={"/admin/product/bbbb"}>Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma shoes",
    price: 690,
    stock: 3,
    action: <Link to={"/admin/product/aaaa"}>Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 69000,
    stock: 5,
    action: <Link to={"/admin/product/bbbb"}>Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma shoes",
    price: 690,
    stock: 3,
    action: <Link to={"/admin/product/aaaa"}>Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 69000,
    stock: 5,
    action: <Link to={"/admin/product/bbbb"}>Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma shoes",
    price: 690,
    stock: 3,
    action: <Link to={"/admin/product/aaaa"}>Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Products",
      true
    ),
    []
  );
  return (
    <div className="admin-container">
      {/* Side Bar */}

      <AdminSidebar />

      {/* Main */}

      <main>{Table()}</main>
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
