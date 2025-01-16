import { createCSV } from "../utils/createCSV.js";
import { fetchData } from "../utils/fetchData.js";
import path from "path"

export const generateCSV = async (req, res) => {
    try {
        const [users, posts, comments] = await fetchData();

        const rows = users.map((user => {
            const post = posts.find((p) => p.id === user.id) || {};
            const comment = comments.find((c) => c.id === user.id) || {};
            return {
                name:user.name || "",
                title:post.title || "",
                body: comment.body || ""
            };
        }));

        const filePath = path.join("output","data.csv")
        
        await createCSV(rows,filePath)

        res.status(200).json({ message: 'CSV generated successfully!', filePath });

    } catch (error) {
        return res.status(500).json(error)
    }
}