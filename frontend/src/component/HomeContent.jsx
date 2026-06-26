import React, {useState, useEffect} from 'react';
import '../index.css';
function HomeContent(){
    const [name, setName] = useState("");

    useEffect(() => {
        const userInfoString = localStorage.getItem('user-info');
        
        if (userInfoString) {
            try {
                // Parse string JSON menjadi objek JavaScript kembali
                const userInfo = JSON.parse(userInfoString);
                
                // Set nama sesuai dengan properti dari backend (res.user.name)
                if (userInfo && userInfo.name) {
                    setName(userInfo.name);
                }
            } catch (error) {
                console.error("Gagal membaca data user dari localStorage", error);
            }
        }
    }, []);

    return(
        <div className="bg-white min-h-screen flex flex-col  w-full items-start justify-center mt-20 mx-auto  ">
            <div className="w-full p-15 ">
                    <h1 className="text-4xl font-bold text-left">Welcome to LabCode, <span>{name}</span></h1>
                    <p className="text-lg text-left mt-4">Discover amazing features and services tailored for you.</p>
            </div>
            <div className="w-full mt-12  ">
                    <h2 className="text-2xl font-semibold p-15 bg-gray-100  rounded-lg">All Challenges</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-15">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2">Challenge 1</h3>
                            <p className="text-gray-600">Description of Challenge 1.</p>
                        </div>
                    </div>
                    
            </div>
            
        </div>
    )
}
export default HomeContent