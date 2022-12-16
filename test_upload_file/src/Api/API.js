import axiosInstance from "../Api/axiosInstance";

const apiSettings = {
  createListing: async (data) => {
    let form_data = new FormData();
    if (data.file) form_data.append("file", data.file);
    form_data.append("remark", data.remark);

    const response = await axiosInstance
      .post("api/upload/", form_data, {
        crossdomain: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
    return response;
  },
};

export default apiSettings;
