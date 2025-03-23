import { RootState } from '@/store';
import { Cake, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux';


function LeftSection() {
    const {auth} = useSelector((state: RootState) => state);
    console.log(auth)

    return (
        <div className='w-[200px] h-[200px] rounded-full flex flex-col gap-4'>
            <Image
                src={auth?.userInfo?.photoURL}
                alt='avatar'
                width={150}
                height={10}
                className='w-full h-full object-cover rounded-full'
            />
        </div>
    )
}

export default LeftSection