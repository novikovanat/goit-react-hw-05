import React from "react";
import * as Yup from "yup";
import { Form, Field, Formik, ErrorMessage, useFormik } from "formik";

function SearchBar() {
  const formik = useFormik({
    initialValues: { search: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="search"
        // type="text"
        // id="search"
        onChange={formik.handleChange}
        value={formik.values.search}
      />
    </form>
  );
}

export default SearchBar;

// const validationSchema = Yup.object({ search: Yup.string().required });

//   return (
//     <div>
//       <Formik
//         onSubmit={(value) => console.log(value)}
//         initialValues={{ search: "" }}
//         validationSchema={validationSchema}
//         validate={(values) => {
//           const errors = {};
//           if (!values.search) {
//             errors.search = "Required";
//             return errors;
//           }
//         }}
//       >
//         <Form onSubmit={(value) => console.log(value)}>
//           <Field name="search" type="text" ></Field>
//           <ErrorMessage name="search" />
//           <button type="button">Search</button>
//         </Form>
//       </Formik>
//     </div>
//   );
