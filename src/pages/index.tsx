import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import SearchAppBar from "@/components/NavBar/SearchAppBar";
import ColorInversionFooter from "@/components/Footer/ColorInversionFooter";
import { Card, CardContent } from "@mui/joy";
import { CardHeader } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen flex flex-col flex-1">
      <SearchAppBar />
      <div className="bg-red-500 h-full flex justify-center items-center">
      <Card>
        <CardContent>
          <CardHeader sx={{
            color: 'purple'
          }} title="Test" />
          <div>Hello Guys</div>
          <div>How Are you</div>
        </CardContent>
      </Card>
      </div>
      

     

      <ColorInversionFooter />
      </div>
      
    </main>
  );
}
