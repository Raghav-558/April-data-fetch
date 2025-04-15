import Hero from "@/components/Hero";
import QuestionOne from "@/components/QuestionOne";
import QuestionTwo from "@/components/QuestionTwo";

async function getData() {
  try {
    const response = await fetch(
      "http://universities.hipolabs.com/search?name=middle",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
  return [];
}

export default async function Home() {
  const heroData = await getData();
  console.log("Data passed to Hero:", heroData);
  return (
    <>
      <Hero heroContent={heroData} />
      <QuestionOne />
      <QuestionTwo/>
    </>
  );
}
