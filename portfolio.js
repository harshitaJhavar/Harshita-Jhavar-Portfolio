import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEye } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const storedViews = localStorage.getItem("portfolioViews");
    const newViews = storedViews ? parseInt(storedViews) + 1 : 1;
    localStorage.setItem("portfolioViews", newViews);
    setViews(newViews);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-50 p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6">
        <header className="text-center py-6 border-b">
          <h1 className="text-5xl font-extrabold text-gray-800">Your Name</h1>
          <p className="text-gray-500 mt-2">ML Engineer | Data Scientist</p>
          <div className="mt-2 text-gray-600 flex items-center justify-center">
            <FaEye className="mr-2" /> {views} views
          </div>
        </header>
        
        <section className="my-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
          <p className="text-gray-600 mt-2 leading-relaxed">I am an experienced ML Engineer and Data Scientist with a passion for building AI-powered solutions. I also provide coaching for EB1-A applicants and student mentorship.</p>
        </section>
        
        <section className="my-8">
          <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <Card className="shadow-md hover:shadow-xl transition">
              <CardContent>
                <h3 className="text-xl font-bold">Project 1</h3>
                <p className="text-gray-600">Brief description of your project.</p>
                <a href="#" className="text-blue-500 font-semibold">View on GitHub</a>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="my-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Coaching & Mentorship</h2>
          <p className="text-gray-600 mt-2">I offer live coaching for EB1-A consultation and student mentorship.</p>
          <Button className="mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">Contact Me</Button>
        </section>
        
        <section className="my-8">
          <h2 className="text-3xl font-semibold text-gray-800">Blog</h2>
          <div className="grid gap-6 mt-4">
            <Card className="shadow-md hover:shadow-xl transition">
              <CardContent>
                <h3 className="text-xl font-bold">Blog Post 1</h3>
                <p className="text-gray-600">A short summary of your blog post.</p>
                <a href="#" className="text-blue-500 font-semibold">Read More</a>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <footer className="text-center mt-8 border-t pt-4">
          <a href="#" className="text-gray-600 mx-4 hover:text-black transition"><FaGithub size={30} /></a>
          <a href="#" className="text-gray-600 mx-4 hover:text-black transition"><FaLinkedin size={30} /></a>
        </footer>
      </div>
    </div>
  );
}
