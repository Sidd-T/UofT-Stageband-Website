"use server";
import { neon } from "@neondatabase/serverless";

export async function queryDB(query: string) {
    const sql = neon(process.env.DATABASE_URL);  // Connect to the Neon database using environment variable

    try {
      const data = await sql(query);
      return data;
    } 
    catch (error) {
      console.error("Database query error:", error);
      throw new Error("Failed to execute query");
    }
}
