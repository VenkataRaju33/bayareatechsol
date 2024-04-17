import React, { useReducer } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <ul className="flex gap-5 mt-5 justify-center flex-wrap">
        <li>
        <Button 
          variant={router.pathname === "/" ? "destructive" : "secondary"}
          onClick={()=>router.push('/')}
          className="border font-bold">
          Client Side Rendered Page
        </Button>
      </li>
      <li>
        <Button
          variant={router.pathname === "/users" ? "destructive" : "secondary"}
          onClick={()=>router.push('/users')}

          className="border font-bold"
        >
          Server Side Rendered Page
        </Button>
      </li>
      
    </ul>
  );
};

export default Header;
