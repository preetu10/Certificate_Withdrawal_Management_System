import React, { useRef } from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from '@/components/ui/button';


const Pdf = () => {
    const pdfref = useRef();

    const downloadPDF = () => {
        const input = pdfref.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = 5 + (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('form');
        })
    }
    return (
        <div>
            <div ref={pdfref}>
                <div className='flex justify-evenly mt-5'>
                    <div className='hind-siliguri-regular text-left'>
                        <p>আবেদনপত্র গ্রহনের তারিখ............</p>
                        <p>সনদপত্র প্রদানের তারিখ.............</p>
                        <p className='border border-black text-justify w-52 p-2 mt-5'>প্রভোস্ট / অধ্যক্ষ / বহিরাগত প্রার্থীর ক্ষেত্রে গেজেটেড অফিসার কর্তৃক সত্যায়িত ছবি এখানে সংযুক্ত করতে হবে (এক কপি)</p>
                    </div>
                    <div className="hind-siliguri-regular">
                        <img className='mx-auto w-28 h-30' src="cu_logo.png" alt="" />
                        <h1 className='text-xl font-bold mt-5'>চট্টগ্রাম বিশ্ববিদ্যালয়</h1>
                        <p className='border border-black text-justify w-52 p-2 mt-5'>ডি-ডি/ পে অডার নং টাকা তারিখ অগ্রণী ব্যাংক / জনতা ব্যাংক (শিক্ষার্থী পূরণ করবেন)</p>
                    </div>
                    <div>
                        <div className='text-justify w-56 ml-8'>
                            <p>মূল সনদ ফি...............................টাকা</p>
                            <p>উস ফি.........................................টাকা</p>
                            <p>জরুরী ফি....................................টাকা</p>
                            <p>ইংরেজিতে সাময়িক সনদ ফি........টাকা</p>
                            <p>বাংলায় সাময়িক সনদ ফি.........টাকা</p>
                            <p>মার্কশিট ফি................................টাকা</p>
                            <p>ম্যানেজার জনতা ব্যাংক / অগ্রণী ব্যাংক, চ. বি. শাখা অনুগ্রহপূর্বক মোট টাকা .........উপরোক্ত ফিস বাবদ গ্রহন করুন।</p>
                            <p className='mt-8 -ml-8  text-center'>..............................</p>
                            <p className='mb-2'>দায়িত্বপ্রাপ্ত কর্মকর্তার স্বাক্ষর</p>
                        </div>
                    </div>
                </div>

                <div className='text-justify hind-siliguri-regular'>
                    <h2 className='font-bold text-center'>মূল / সাময়িক সার্টিফিকেট / সনদপত্র ও মার্কশিট সত্যায়িত / ইংরেজিতে মার্কশিট এর জন্য আবেদনপত্র।</h2>
                    <div className='flex justify-between'>
                        <p>শিক্ষার্থীর নাম (বাংলায়):</p>
                        <p>(ইংরেজিতে):</p>
                    </div>

                    <div className='flex justify-between'>
                        <p>পিতার নাম (বাংলায়):</p>
                        <p>(ইংরেজিতে):</p>
                    </div>

                    <div className='flex justify-between'>
                        <p>মাতার নাম (বাংলায়):</p>
                        <p>(ইংরেজিতে):</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>গ্রামঃ</p>
                        <p>পোস্টঃ</p>
                        <p>থানাঃ</p>
                        <p>জেলাঃ</p>
                    </div>
                    <p>বর্তমান ঠিকানা:</p>
                    <p>মোবাইল নং/টেলিফোন নং:</p>
                </div>

                
            </div>

            <div className='row text-center mt-5'>
                <Button onClick={downloadPDF}>Download PDF</Button>
            </div>
        </div>
    )
}

export default Pdf