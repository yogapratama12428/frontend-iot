import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";

const AddDevice = () => {
  return (
    <div className="container mx-auto flex justify-center">
        <Card className="mt-6 w-96" color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Sign Up Your Devices
            </Typography>
            
            <Typography color="gray" className="mt-1 font-normal">
                Enter your details to register device.
            </Typography>
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Name" />
                    <Input size="lg" label="Email" />
                    <Input type="password" size="lg" label="Password" />
                </div>
                <Button className="mt-6" fullWidth>
                    Register Device
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    I o T By {" "}
                    <a href="#" className="font-medium text-gray-900">
                    Busra IoT
                    </a>
                </Typography>
           
        </Card>
    </div>
   
  )
}

export default AddDevice