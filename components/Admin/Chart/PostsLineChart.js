import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import PostCurdService from "../../../utils/PostCurdService";

const PostCurd = new PostCurdService();

export default function PostsLineChart() {
  const [posts, setPosts] = useState([]);

  async function getAllPosts() {
    const result = await PostCurd.readChart().catch((err) =>
      console.log("error :  " + err)
    );
    setPosts(result.data.data);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <ResponsiveContainer aspect={1.6} >
      <LineChart
        data={posts}
        margin={{
          top: 20,
          right: 40,
          left: 20,
          bottom: 20
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[2000, 2010]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="year"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
