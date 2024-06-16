const getBase64FromFile = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = (reader.result as string).split(",")[1]; // Remove metadata
      resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
  });
};

export default getBase64FromFile;
