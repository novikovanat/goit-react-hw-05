import { useId } from "react";
import * as Yup from "yup";
import { Form, Field, Formik, ErrorMessage } from "formik";

function SearchBar({onSubmit}) {
  const homePageSearchId = useId();
  const validation = Yup.object({
    search: Yup.string().required("Required"),
  });
  function handleSubmit(values) {
      onSubmit(values.search)
  }
  return (
    <div>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={handleSubmit}
        validationSchema={validation}
      >
        <Form>
          <Field name="search" type="text" id={homePageSearchId} />
          <ErrorMessage name="search" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
}

export default SearchBar;

