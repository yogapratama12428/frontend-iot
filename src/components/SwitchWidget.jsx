/* eslint-disable react/prop-types */

import axios from "axios";
// import axios from "axios";
import { useState } from "react";
import { PowerIcon } from "@heroicons/react/24/outline";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import {
} from "@material-tailwind/react";
import Switch from '@mui/material/Switch';
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Input,
    Typography,
  } from "@material-tailwind/react";

const SwitchWidget = ({data}) => {
//   const { id, value } = props;
  const [isToggled, setIsToggled] = useState(data.value_boolean || false );
  
  const handleToggleChange = async () => {
    setIsToggled(!isToggled);
    // console.log(isToggled)
    try {
        const response = await axios.put(`${import.meta.env.VITE_LOCAL_BASE_URL}/device/${data.id}`, {
            value_boolean: !isToggled  
        })
        console.log(response.data)
    } catch (error) {
        if(error.response) {
            console.log(error.response)
        }
    }
    
  };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_LOCAL_BASE_URL}/device/${data.id}`);
            console.log(response.data)
        } catch (error) {
            if(error.response) {
                console.log(error.response)
            }
        }
    }

  return ( 
    <div className="rounded-xl px-6 flex m-2 border-2 shadow-md bg-light-green-50 border-black" >
       
       <div className="flex justify-between ">
            <div className="flex flex-col">
                    <div className="my-1">
                        <p>
                            {data.name}
                        </p>
                     </div>
                    <div className="w-36 flex justify-between">   
                         {/* <PowerIcon className={`bg-gray-300 border-2 rounded-full px-2 ${!isToggled ? ' h-6 w-6 text-purple-400' : '  h-6 w-6 text-yellow-900 border-purple-black '}`} />  */}
        
                        <Switch
                            checked={isToggled}
                            onChange={handleToggleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                         /> 
                          
                    </div>
            </div>

            <div className="flex my-auto mx-1">
             <Popover placement="bottom">
                <PopoverHandler>
                    <Button className="
                        border-red-100 rounded-lg p-2 bg-red-100 
                    "> <TrashIcon className="h-6 w-6 text-black "/></Button>
                </PopoverHandler>
                <PopoverContent className="w-56">
                <div className="flex">
                        <p className="px-2 py-2">
                            Are you sure want to delete ? 
                        </p>

                        <button className="px-2 py-2"
                            onClick={handleDelete}
                        >
                            delete 
                        </button>
                    </div>
                </PopoverContent>
            </Popover>
            </div>
            <div className="flex my-auto">
                <Popover placement="bottom-start">
                    <PopoverHandler>
                        <Button className="
                            border-green-100 rounded-lg p-2 bg-green-100 
                        "> < WrenchScrewdriverIcon className="h-6 w-6 text-black"/></Button>
                    </PopoverHandler>
                    <PopoverContent className="w-96">
                        <Typography variant="h6" color="blue-gray" className="mb-6">
                            Edit Device
                        </Typography>
                        <div className="flex gap-2">
                            <Input label="Email Address" />
                            <Button variant="gradient">Subscribe</Button>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
       </div>    
    </div>
  )
}

export default SwitchWidget