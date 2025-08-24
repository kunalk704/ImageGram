export async function createPost(req, res) {
  console.log(req.file); // contains file info
  // call the service layer function
  return res.json({ message: "Post created successfully" });
}
