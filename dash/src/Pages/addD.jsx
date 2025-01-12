// // import React, { useState, useEffect } from "react";
// // import {
// //   Card,
// //   Table,
// //   Space,
// //   Button,
// //   message,
// //   Select,
// //   Row,
// //   Col,
// //   InputNumber,
// // } from "antd";
// // import axios from "../Components/Axios"; // Adjust the import path as needed

// // const { Option } = Select;

// // const AddDiscount = () => {
// //   const [brandData, setBrandData] = useState([]);
// //   const [categoryData, setCategoryData] = useState([]);
// //   const [subCategoryData, setSubCategoryData] = useState([]);
// //   const [productData, setProductData] = useState([]);

// //   useEffect(() => {
// //     fetchBrands();
// //     fetchCategories();
// //     fetchSubCategories();
// //     // fetchProducts();
// //   }, []);

// //   const fetchBrands = async () => {
// //     try {
// //       const response = await axios.get("/brand");
// //       setBrandData(response.data.data.doc);
// //     } catch (error) {
// //       console.error("Error fetching brands:", error);
// //     }
// //   };

// //   const fetchCategories = async () => {
// //     try {
// //       const response = await axios.get("/category");
// //       setCategoryData(response.data.data.doc);
// //     } catch (error) {
// //       console.error("Error fetching categories:", error);
// //     }
// //   };

// //   const fetchSubCategories = async () => {
// //     try {
// //       const response = await axios.get("/subCategory");
// //       setSubCategoryData(response.data.data.doc);
// //     } catch (error) {
// //       console.error("Error fetching subcategories:", error);
// //     }
// //   };

// //   // const fetchProducts = async () => {
// //   //   try {
// //   //     const response = await axios.get("/varient");
// //   //     console.log(response, "response");
// //   //     setProductData(response.data.data.doc);
// //   //   } catch (error) {
// //   //     console.error("Error fetching products:", error);
// //   //   }
// //   // };

// //   const handleUpdateDiscount = async (record, type) => {
// //     try {
// //       const { id, discountType, discountValue } = record;
// //       const response = await axios.put("/discount/apply", {
// //         type,
// //         id: record._id,
// //         discountType,
// //         discountValue,
// //       });

// //       message.success("Discount updated successfully");
// //       console.log(response, "Items............");
// //     } catch (error) {
// //       message.error("Failed to update discount");
// //       console.error("Error updating discount:", error);
// //     }
// //   };

// //   const handleSelectChange = (value, record, key) => {
// //     const newData = (data, setData) => {
// //       const updatedData = data.map((item) => {
// //         if (item._id === record._id) {
// //           return { ...item, [key]: value };
// //         }
// //         return item;
// //       });
// //       setData(updatedData);
// //     };

// //     if (record.Type === "brand") {
// //       newData(brandData, setBrandData);
// //     } else if (record.Type === "category") {
// //       newData(categoryData, setCategoryData);
// //     } else if (record.Type === "subCategory") {
// //       newData(subCategoryData, setSubCategoryData);
// //     } else if (record.Type === "product") {
// //       newData(productData, setProductData);
// //     }
// //   };

// //   const columns = (type) => [
// //     {
// //       title: "Name/Title",
// //       key: "nameOrTitle",
// //       render: (text, record) => (
// //         <span>
// //           {type === "product" ? record.title : record.name || record?.title}
// //         </span>
// //       ),
// //     },
// //     {
// //       title: "Discount Type",
// //       dataIndex: "discountType",
// //       key: "discountType",
// //       render: (value, record) => (
// //         <Select
// //           style={{ width: "100%" }}
// //           value={value}
// //           onChange={(val) => handleSelectChange(val, record, "discountType")}
// //           options={[
// //             { label: "Amount", value: "amount" },
// //             { label: "Percent", value: "percent" },
// //             { label: "none", value: "none" },
// //           ]}
// //         />
// //       ),
// //     },
// //     {
// //       title: "Discount Value",
// //       dataIndex: "discountValue",
// //       key: "discountValue",
// //       render: (value, record) => (
// //         <InputNumber
// //           style={{ width: "100%" }}
// //           value={value}
// //           onChange={(val) => handleSelectChange(val, record, "discountValue")}
// //         />
// //       ),
// //     },
// //     {
// //       title: "Action",
// //       key: "action",
// //       render: (_, record) => (
// //         <Space size="middle">
// //           <Button onClick={() => handleUpdateDiscount(record, type)}>
// //             Update Discount
// //           </Button>
// //         </Space>
// //       ),
// //     },
// //   ];

// //   return (
// //     <>
// //       <h2 className="text-center font-semibold md:text-2xl text-xl py-10">
// //         ADD Discount
// //       </h2>
// //       <div className="flex justify-center flex-col items-center">
// //         <Row gutter={16} className="justify-center">
// //           <Col span={16}>
// //             <Card title="Apply Discount in Brand" bordered={false}>
// //               <Table
// //                 dataSource={brandData?.map((item) => ({
// //                   ...item,
// //                   name: item.name || item.title, // Use name or title if available
// //                   Type: "brand",
// //                 }))}
// //                 columns={columns("brand")}
// //                 rowKey="_id"
// //               />
// //             </Card>
// //           </Col>
// //           <Col span={16} className="mt-10">
// //             <Card title="Apply Discount in Category" bordered={false}>
// //               <Table
// //                 dataSource={categoryData?.map((item) => ({
// //                   ...item,
// //                   name: item.name || item.title, // Use name or title if available
// //                   Type: "category",
// //                 }))}
// //                 columns={columns("category")}
// //                 rowKey="_id"
// //               />
// //             </Card>
// //           </Col>
// //         </Row>
// //         <Row className="mt-10 justify-center">
// //           <Card
// //             title="Apply Discount in SubCategory "
// //             className="min-w-[900px]"
// //             bordered={false}
// //           >
// //             <Table
// //               dataSource={subCategoryData?.map((item) => ({
// //                 ...item,
// //                 name: item.name || item.title, // Use name or title if available
// //                 Type: "subCategory",
// //               }))}
// //               columns={columns("subCategory")}
// //               rowKey="_id"
// //             />
// //           </Card>
// //           {/* <Col span={16} className="mt-10">
// //             <Card title="Apply Discount in Product" bordered={false}>
// //               <Table
// //                 dataSource={productData?.map((item) => ({
// //                   ...item,
// //                   name: item.name || item.title, // Use name or title if available
// //                   Type: "product",
// //                 }))}
// //                 columns={columns("product")}
// //                 rowKey="_id"
// //               />
// //             </Card>
// //           </Col> */}
// //         </Row>
// //       </div>
// //     </>
// //   );
// // };

// // export default AddDiscount;

// import React, { useState, useEffect } from "react";
// import {
//   Card,
//   Table,
//   Space,
//   Button,
//   message,
//   Select,
//   Row,
//   Col,
//   InputNumber,
// } from "antd";
// import axios from "../Components/Axios"; // Adjust the import path as needed

// const { Option } = Select;

// const AddDiscount = () => {
//   const [brandData, setBrandData] = useState([]);
//   const [categoryData, setCategoryData] = useState([]);
//   const [subCategoryData, setSubCategoryData] = useState([]);
//   const [productData, setProductData] = useState([]);

//   useEffect(() => {
//     fetchBrands();
//     fetchCategories();
//     fetchSubCategories();
//     // fetchProducts();
//   }, []);

//   const fetchBrands = async () => {
//     try {
//       const response = await axios.get("/brand");
//       setBrandData(response.data.data.doc);
//     } catch (error) {
//       console.error("Error fetching brands:", error);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get("/category");
//       setCategoryData(response.data.data.doc);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   const fetchSubCategories = async () => {
//     try {
//       const response = await axios.get("/subCategory");
//       setSubCategoryData(response.data.data.doc);
//     } catch (error) {
//       console.error("Error fetching subcategories:", error);
//     }
//   };

//   // const fetchProducts = async () => {
//   //   try {
//   //     const response = await axios.get("/varient");
//   //     console.log(response, "response");
//   //     setProductData(response.data.data.doc);
//   //   } catch (error) {
//   //     console.error("Error fetching products:", error);
//   //   }
//   // };

//   const handleUpdateDiscount = async (record, type) => {
//     try {
//       const { discountType, discountValue } = record;
//       const response = await axios.put("/discount/apply", {
//         type,
//         id: record._id,
//         discountType,
//         discountValue,
//       });

//       message.success("Discount updated successfully");
//       console.log(response, "Items............");
//     } catch (error) {
//       message.error("Failed to update discount");
//       console.error("Error updating discount:", error);
//     }
//   };

//   const handleSelectChange = (value, record, key) => {
//     const newData = (data, setData) => {
//       const updatedData = data.map((item) => {
//         if (item._id === record._id) {
//           return { ...item, [key]: value };
//         }
//         return item;
//       });
//       setData(updatedData);
//     };

//     if (record.Type === "brand") {
//       newData(brandData, setBrandData);
//     } else if (record.Type === "category") {
//       newData(categoryData, setCategoryData);
//     } else if (record.Type === "subCategory") {
//       newData(subCategoryData, setSubCategoryData);
//     } else if (record.Type === "product") {
//       newData(productData, setProductData);
//     }
//   };

//   const columns = (type) => [
//     {
//       title: "Name/Title",
//       key: "nameOrTitle",
//       render: (text, record) => (
//         <span>
//           {type === "product" ? record.title : record.name || record?.title}
//         </span>
//       ),
//     },
//     {
//       title: "Discount Type",
//       dataIndex: "discountType",
//       key: "discountType",
//       render: (value, record) => (
//         <Select
//           style={{ width: "100%" }}
//           value={value || "none"} // Default value
//           onChange={(val) => handleSelectChange(val, record, "discountType")}
//         >
//           <Option value="amount">Amount</Option>
//           <Option value="percent">Percent</Option>
//           <Option value="none">None</Option>
//         </Select>
//       ),
//     },
//     {
//       title: "Discount Value",
//       dataIndex: "discountValue",
//       key: "discountValue",
//       render: (value, record) => (

//         <InputNumber
//           style={{ width: "100%" }}
//           value={value || 0} // Default value
//           onChange={(val) => handleSelectChange(val, record, "discountValue")}
//         />
//       ),
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (_, record) => (
//         <Space size="middle">
//           <Button onClick={() => handleUpdateDiscount(record, type)}>
//             Update Discount
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <>
//       <h2 className="text-center font-semibold md:text-2xl text-xl py-10">
//         ADD Discount
//       </h2>
//       <div className="flex justify-center flex-col items-center">
//         <Row gutter={16} className="justify-center">
//           <Col span={16}>
//             <Card title="Apply Discount in Brand" bordered={false}>
//               <Table
//                 dataSource={brandData?.map((item) => ({
//                   ...item,
//                   name: item.name || item.title, // Use name or title if available
//                   Type: "brand",
//                 }))}
//                 columns={columns("brand")}
//                 rowKey="_id"
//               />
//             </Card>
//           </Col>
//           <Col span={16} className="mt-10">
//             <Card title="Apply Discount in Category" bordered={false}>
//               <Table
//                 dataSource={categoryData?.map((item) => ({
//                   ...item,
//                   name: item.name || item.title, // Use name or title if available
//                   Type: "category",
//                 }))}
//                 columns={columns("category")}
//                 rowKey="_id"
//               />
//             </Card>
//           </Col>
//         </Row>
//         <Row className="mt-10 justify-center">
//           <Card
//             title="Apply Discount in SubCategory"
//             className="min-w-[900px]"
//             bordered={false}
//           >
//             <Table
//               dataSource={subCategoryData?.map((item) => ({
//                 ...item,
//                 name: item.name || item.title, // Use name or title if available
//                 Type: "subCategory",
//               }))}
//               columns={columns("subCategory")}
//               rowKey="_id"
//             />
//           </Card>
//           {/* <Col span={16} className="mt-10">
//             <Card title="Apply Discount in Product" bordered={false}>
//               <Table
//                 dataSource={productData?.map((item) => ({
//                   ...item,
//                   name: item.name || item.title, // Use name or title if available
//                   Type: "product",
//                 }))}
//                 columns={columns("product")}
//                 rowKey="_id"
//               />
//             </Card>
//           </Col> */}
//         </Row>
//       </div>
//     </>
//   );
// };

// export default AddDiscount;

import React, { useState, useEffect } from "react";
import axios from "../Components/Axios"; // Adjust the import path as needed

const AddDiscount = () => {
  const [brandData, setBrandData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchBrands();
    fetchCategories();
    fetchSubCategories();
    // fetchProducts();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await axios.get("/brand");
      setBrandData(response.data.data.doc);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/category");
      setCategoryData(response.data.data.doc);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchSubCategories = async () => {
    try {
      const response = await axios.get("/subCategory");
      setSubCategoryData(response.data.data.doc);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const handleUpdateDiscount = async (record, type) => {
    try {
      const { discountType, discountValue } = record;
      const response = await axios.put("/discount/apply", {
        type,
        id: record._id,
        discountType,
        discountValue,
      });

      alert("Discount updated successfully");
      console.log(response, "Items............");
    } catch (error) {
      alert("Failed to update discount");
      console.error("Error updating discount:", error);
    }
  };

  const handleSelectChange = (value, record, key) => {
    const newData = (data, setData) => {
      const updatedData = data.map((item) => {
        if (item._id === record._id) {
          return { ...item, [key]: value };
        }
        return item;
      });
      setData(updatedData);
    };

    if (record.Type === "brand") {
      newData(brandData, setBrandData);
    } else if (record.Type === "category") {
      newData(categoryData, setCategoryData);
    } else if (record.Type === "subCategory") {
      newData(subCategoryData, setSubCategoryData);
    } else if (record.Type === "product") {
      newData(productData, setProductData);
    }
  };

  console.log(productData, "PPPPP.......");

  const renderTable = (data, type) => (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full table-auto bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Name/Title</th>
            <th className="px-4 py-2 text-left">Discount Type</th>
            <th className="px-4 py-2 text-left">Discount Value</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record._id}>
              <td className="border-t px-4 py-2">
                {type === "product"
                  ? record.title
                  : record.name || record.title}
              </td>
              <td className="border-t px-4 py-2">
                <select
                  className="w-full px-4 py-2 border rounded-md"
                  value={record.discountType || "none"}
                  onChange={(e) =>
                    handleSelectChange(e.target.value, record, "discountType")
                  }
                >
                  <option value="amount">Amount</option>
                  <option value="percent">Percent</option>
                  <option value="none">None</option>
                </select>
              </td>
              <td className="border-t px-4 py-2">
                <input
                  type="number"
                  className="w-full px-4 py-2 border rounded-md"
                  value={record.discountValue || 0}
                  onChange={(e) =>
                    handleSelectChange(e.target.value, record, "discountValue")
                  }
                />
              </td>
              <td className="border-t px-4 py-2">
                <button
                  onClick={() => handleUpdateDiscount(record, type)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Update Discount
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <h2 className="text-center font-semibold md:text-2xl text-xl py-10">
        ADD Discount
      </h2>
      <div className="flex justify-center flex-col items-center">
        <div className="flex flex-wrap justify-center space-x-8">
          <div className="w-full md:w-1/2 mb-10">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Apply Discount in Brand
              </h3>
              {renderTable(
                brandData.map((item) => ({
                  ...item,
                  name: item.name || item.title,
                  Type: "brand",
                })),
                "brand"
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-10">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Apply Discount in Category
              </h3>
              {renderTable(
                categoryData.map((item) => ({
                  ...item,
                  name: item.name || item.title,
                  Type: "category",
                })),
                "category"
              )}
            </div>
          </div>
        </div>

        <div className="w-full mt-10 flex justify-center">
          <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-5xl">
            <h3 className="text-xl font-semibold mb-4">
              Apply Discount in SubCategory
            </h3>
            {renderTable(
              subCategoryData.map((item) => ({
                ...item,
                name: item.name || item.title,
                Type: "subCategory",
              })),
              "subCategory"
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDiscount;
