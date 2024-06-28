import React, { useRef } from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from '@/components/ui/button';
import { FeeTable } from '../student/fee/feetable';


const Pdf = () => {
    const page1Ref = useRef(null);
    const page2Ref = useRef(null);

    const downloadPDF = () => {
        const doc = new jsPDF('p', 'mm', 'a4');

        const renderPDFPage = (element, pageNumber) => {
            html2canvas(element, {
                useCORS: true,
                allowTaint: true,
                scrollX: 0,
                scrollY: -window.scrollY,
            }).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const imgProps = doc.getImageProperties(imgData);
                const pdfWidth = doc.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                if (pageNumber === 1) {
                    doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                } else {
                    doc.addPage();
                    doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                }

                if (pageNumber === 2) {
                    doc.save('document.pdf');
                }
            });
        };
        renderPDFPage(page1Ref.current, 1);
        renderPDFPage(page2Ref.current, 2);
    };
    return (
        <div>
            <div ref={page1Ref}>
                <div className='lg:flex md:flex justify-evenly mt-5'>
                    <div className='hind-siliguri-regular text-left'>
                        <p>আবেদনপত্র গ্রহনের তারিখ............</p>
                        <p>সনদপত্র প্রদানের তারিখ.............</p>
                        <p className='border border-black text-justify w-52 p-2 mt-5'>প্রভোস্ট / অধ্যক্ষ / বহিরাগত প্রার্থীর ক্ষেত্রে গেজেটেড অফিসার কর্তৃক সত্যায়িত ছবি এখানে সংযুক্ত করতে হবে (এক কপি)</p>
                    </div>
                    <div className="hind-siliguri-regular">
                        {/* <img className='mx-auto w-28 h-30' src="cu_logo.png" alt="" /> */}

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

                <div className='text-justify hind-siliguri-regular mx-5'>
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

                <div className='text-justify hind-siliguri-regular mx-5'>
                    <h2 className='font-bold text-center'>পরীক্ষা পাশের বিবরণ</h2>
                    <p className='font-bold'>১। ডিগ্রী পাস পরীক্ষা (বি. এ /
                        বি. এসসি/ বি.এস.এস/
                        বি.কম ও বি.এফ.এ. পাস): </p>
                    <div className='flex justify-between'>
                        <p>ক) কলেজের নাম/কেন্দ্রের নাম:</p>
                        <p>পরীক্ষার নাম:</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>রোল নং:</p>
                        <p>পরীক্ষার বৎসর:</p>
                        <p>প্রাপ্ত বিভাগ:</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>রেজিস্ট্রেশন নং:</p>
                        <p>শিক্ষাবর্ষ:</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>খ) সম্পুরক পাস হলে অনুষ্ঠিত মাস ও বৎসর:</p>
                        <p>রোল নং:</p>
                    </div>
                </div>

                <div className='text-justify hind-siliguri-regular mx-5 mt-5'>
                    <p className='font-bold'>২। ডিগ্রী অনার্স / এম.বি.বি.এস / ইঞ্জিনিয়ারিং পরীক্ষা:</p>
                    <div className='flex justify-between'>
                        <p className='font-bold'> ক) ১ম বর্ষ/১ম প্রফেশনাল/বিষয়:</p>
                        <p>হল/কলেজ:</p>
                    </div>

                    <div className='flex justify-between'>
                        <p>পরীক্ষার নাম:</p>
                        <p>পরীক্ষার বৎসর:</p>
                        <p>রোল নং/আই.ডি.নং:</p>
                    </div>

                    <div className='flex justify-between'>
                        <p>রেজিস্ট্রেশন নং/আই.ডি.নং:</p>
                        <p>শিক্ষাবর্ষ:</p>
                        <p>প্রাপ্ত শ্রেণী/জিপিএ:</p>
                    </div>
                    <p>পরীক্ষা অনুষ্ঠিত মাস ও বৎসর:</p>
                </div>

                <div className='text-justify hind-siliguri-regular mx-5 mt-5'>
                    <div className='flex justify-between'>
                        <p className='font-bold'> খ)২য় বর্ষ/২য় প্রফেশনাল/বিষয়:</p>
                        <p>হল/কলেজ:</p>
                    </div>

                    <div className='flex justify-between'>
                        <p>পরীক্ষার নাম:</p>
                        <p>পরীক্ষার বৎসর:</p>
                        <p>রোল নং/আই.ডি.নং:</p>
                    </div>

                    <div className='flex justify-between'>
                        <p>রেজিস্ট্রেশন নং/আই.ডি.নং:</p>
                        <p>শিক্ষাবর্ষ:</p>
                        <p>প্রাপ্ত শ্রেণী/জিপিএ:</p>
                    </div>
                    <p>পরীক্ষা অনুষ্ঠিত মাস ও বৎসর:</p>
                </div>

                <div className='text-justify hind-siliguri-regular mx-5 mt-5'>
                    <div className='flex justify-between'>
                        <p className='font-bold'> গ)৩য় বর্ষ/৩য় প্রফেশনাল/বিষয়:</p>
                        <p>হল/কলেজ:</p>
                    </div>

                    <div className='flex justify-between'>
                        <p>পরীক্ষার নাম:</p>
                        <p>পরীক্ষার বৎসর:</p>
                        <p>রোল নং/আই.ডি.নং:</p>
                    </div>

                    <div className='flex justify-between'>
                        <p>রেজিস্ট্রেশন নং/আই.ডি.নং:</p>
                        <p>শিক্ষাবর্ষ:</p>
                        <p>প্রাপ্ত শ্রেণী/জিপিএ:</p>
                    </div>
                    <p>পরীক্ষা অনুষ্ঠিত মাস ও বৎসর:</p>
                </div>

                <div className='text-justify hind-siliguri-regular mx-5 mt-5'>
                    <div className='flex justify-between'>
                        <p className='font-bold'> ঘ)৪র্থ বর্ষ ফাইনাল/প্রফেশনাল/বিষয়:</p>
                        <p>হল/কলেজ:</p>
                    </div>

                    <div className='flex justify-between'>
                        <p>পরীক্ষার নাম:</p>
                        <p>পরীক্ষার বৎসর:</p>
                        <p>রোল নং/আই.ডি.নং:</p>
                    </div>

                    <div className='flex justify-between'>
                        <p>রেজিস্ট্রেশন নং/আই.ডি.নং:</p>
                        <p>শিক্ষাবর্ষ:</p>
                        <p>প্রাপ্ত শ্রেণী/জিপিএ:</p>
                    </div>
                    <p>পরীক্ষা অনুষ্ঠিত মাস ও বৎসর:</p>
                </div>

                <div className='text-justify hind-siliguri-regular mx-5 mt-5'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>ঙ) সাবসিডিয়ারী বিষয়:১।</p>
                        <p>২।</p>
                    </div>

                    <div className='flex justify-between'>
                        <p>পরীক্ষার বৎসর:</p>
                        <p>রোল নং:</p>
                        <p>প্রাপ্ত ফলাফল:</p>
                    </div>

                    <div className='flex justify-between'>
                        <p>পরীক্ষার বৎসর:</p>
                        <p>রোল নং:</p>
                        <p>প্রাপ্ত ফলাফল:</p>
                    </div>
                    <p>হল/কলেজ:</p>
                </div>

                <div className='text-justify hind-siliguri-regular mx-5 mt-5'>
                    <p className='font-bold'>৩. মাস্টার ডিগ্রী / এলএল.বি. (প্রিলিমিনারি) পরীক্ষাঃ (এম.এ / এম.এসসি. /
                        এম.এস.এস /এম.কম.)</p>
                    <div className='flex justify-between'>
                        <p>বিষয়:</p>
                        <p>পরীক্ষার নাম:</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>হল/কলেজ/কেন্দ্র:</p>
                        <p>রোল নং:</p>
                        <p>পরীক্ষার বৎসর:</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>প্রাপ্ত শ্রেণী /জিপিএ:</p>
                        <p>শিক্ষাবর্ষ:</p>
                        <p>রেজিস্ট্রেশন নং</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>পরীক্ষা অনুষ্ঠিত মাস ও বৎসর:</p>
                        <p>সনদপত্র নং:</p></div>
                </div>

                <div className='text-justify hind-siliguri-regular mx-5 mt-5'>
                    <p className='font-bold'>৪. মাস্টার ডিগ্রী / এলএল.বি. (ফাইনাল) পরীক্ষাঃ (এম.এ / এম.এসসি. /এম.এস.এস /এম.কম./এম.বি.এ/এলএল.এম/ এম.এস)</p>
                    <div className='flex justify-between'>
                        <p>বিষয়:</p>
                        <p>পরীক্ষার নাম:</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>হল/কলেজ/কেন্দ্র:</p>
                        <p>রোল নং:</p>
                        <p>পরীক্ষার বৎসর:</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>প্রাপ্ত শ্রেণী /জিপিএ:</p>
                        <p>শিক্ষাবর্ষ:</p>
                        <p>রেজিস্ট্রেশন নং</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='mb-2'>পরীক্ষা অনুষ্ঠিত মাস ও বৎসর:</p>
                        <p className='mb-2'>সনদপত্র নং:</p></div>
                </div>
            </div>

            <div ref={page2Ref}>
                <div className='text-justify hind-siliguri-regular mx-5 mt-5'>
                    <p className='font-bold mt-5'>৫. বি.এডঃ কলেজ:</p>
                    <div className='flex justify-between'>
                        <p>পরীক্ষার বৎসর:</p>
                        <p>রোল নং:</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>প্রাপ্ত শ্রেণী:</p>
                        <p>রেজিস্ট্রেশন নং:</p>
                        <p>শিক্ষাবর্ষ:</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>পরীক্ষা অনুষ্ঠিত মাস ও বৎসর:</p>
                        <p>সনদপত্র নং:</p>
                    </div>
                </div>

                <div className='text-justify hind-siliguri-regular mx-5 mt-5'>
                    <p className='font-bold'>৬. মিলিটারি সাইন্স/ সার্টিফিকেট কোর্স /ডিপ্লোমা কোর্স /এম.এফ. পরীক্ষা/ ডিপ্লোমা চিকিৎসা বিজ্ঞান</p>
                    <div className='flex justify-between'>
                        <p>পরীক্ষার নাম:</p>
                        <p>রোল নং:</p>
                        <p>পরীক্ষার বৎসর:</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>রেজিস্ট্রেশন নং:</p>
                        <p>শিক্ষাবর্ষ:</p>
                        <p>ফলাফল:</p></div>
                    <div className='flex justify-between'>
                        <p>সনদপত্র নং:</p>
                        <p>হল/কলেজ/ইনস্টিটিউট:</p></div>
                </div>

                <div className='mt-20 hind-siliguri-regular mx-5'>
                    <div className='flex justify-evenly'>
                        <p>
                            <span className='font-bold'>স্বাক্ষর</span>  <br /> প্রভোস্ট / অধ্যক্ষ / পরিচালক / গেজেটেড অফিসার (বহিরাগত প্রার্থীর ক্ষেত্রে) <br /> সীল</p>

                        <p>প্রার্থীর স্বাক্ষর</p>
                    </div>
                </div>


                <div className='text-justify hind-siliguri-regular mx-5 mt-5'>
                    <p className='hind-siliguri-bold text-center' style={{ marginTop: 30 }}>:নিয়মাবলী:</p>
                    <p className="hind-siliguri-regular rule min-w-14">নিয়মিত ছাত্র /ছাত্রীদের ক্ষেত্রে স্ব-স্ব কলেজের
                        অধ্যক্ষ হলের প্রভোর এবং ব'হরাগত ছাত্র/ছাত্রীর
                        ক্ষেত্রে সংযুক্ত কলেজের অধ্যক্ষ অথবা গেজেটেড
                        অফিসার কিংবা এই বিশ্ববিদ্যালয়ের কোন অফিসার শিক্ষক
                        (তার বিভাগীয় সীল মোহরসহ) কর্তৃক দরখাস্তটি প্রতিস্বাক্ষরিত
                        করতে হবে প্রকৃত প্রার্থীর নিকট সঠিক সরবরাহ নিশ্চিত করার
                        জন্য ডিপ্লোমা/ সাময়িক সার্টিফিকেট স্ব-স্ব কলেজের
                        অধ্যক্ষ/হলের প্রভোষ্ট এর নিকট পাঠান হবে। শুধুমাত্র।
                        জরুরী অবস্থায় কোন নিয়মিত ছাত্র/ছাত্রী তার স্ব-স্ব কলেজের
                        অধ্যক্ষ/প্রভোস্ট এবং বহিরাগত ছাত্র/ছাত্রী কোন গেজেটেড
                        অফিসার কিংবা অত্র বিশ্ববিদ্যালয়ের কোন শিক্ষক অথবা
                        অফিসার কর্তৃক সুপারিশনামা ও ফটো সত্যায়িত করে এনে
                        তার ডিপ্লোমা/সাময়িক সার্টিফিকেট সরাসরি অএ অফিস হতে
                        গ্রহণ করতে পারবেন। ডুপ্লিকেট মূল/সাময়িক সনদপত্র নিতে
                        চাইলে পূর্বে ইস্যুকৃত সনদপত্র হারানো গেলে, পুড়ে গেলে,
                        সম্পূর্ন নষ্ট হয়ে গেলে খানার সাধারণ ডায়েরী সহ পত্রিকার
                        বিজ্ঞপ্তি, নষ্ট হয়ে গেলে অংশ বিশেষ যা থাকে দরখাস্তের সহিত
                        জমা দিতে হবে যেই পরীক্ষার সার্টিফিকেটের জন্য আবেদন
                        করা হয়েছে সেই পরীক্ষার এবং অর বিশ্ববিদ্যালয় বা অন্য
                        কোন বিশ্ববিদ্যালয় হতে তার পূর্ববর্তী সকল পরীক্ষা
                        পাশেরমার্কসীটের ফটোকপি অবশ্যই আবেদনপত্রের সাথে
                        সংযোজন করতে হবে। ইংরেজীতে সাময়িক সনদ পেতে
                        চাইলে বাংলায় সাময়িক সনদ গ্রহণ করে থাকলে তা
                        অবশ্যই আবেদনপত্রের সাথে সংযোজন করতে হবে এবং
                        সংযুক্ত মার্কশীট অনুসারে চাহিদাকৃত সনদপত্রের সাথে
                        সম্পৃক্ত কলাম সমূহ পূরণ করতে হবে। মূল সনদপত্রের
                        ক্ষেত্রে যথাযথ কর্তৃপক্ষের মাধ্যমে সাদা কাগজে একটি
                        বিশেষ আবেদন ও ইস্যুকৃত সাময়িক সনদপত্র
                        (যদি গ্রহণ করে থাকে) অত্র ফরমের সংগে দাখিল
                        করতে হবে এবং মূল ও সাময়িক সনদপত্রের
                        আবেদনপত্রের সাথে বিশ্ববিদ্যালয়ের ভর্তির রেজিস্ট্রেশন
                        কার্ডের সত্যায়িত ফটোকপি অবশ্যই জমা দিতে হবে।
                        অন্যথায় মূল ও সাময়িক সনদ ইস্যু করা হবে না সংশোধিত ও ইংরেজীতে মার্কণীটি ইস্যুর ক্ষেত্রে পূর্বে প্রদত্ত মার্কশীট দরখাস্তের সাথে জমা দিতে হবে। হারানো গেলে, পুড়ে গেলে, সম্পূর্ন নষ্ট হয়ে গেলে পত্রিকার বিজ্ঞপ্তি, নষ্ট হয়ে গেলে অংশ বিশেষ যা থাকে দরখাস্তের সহিত জমা দিতে হবে দরখাস্ত প্রাপ্তির ৫ দিন (ছুটির দিন ছাড়া) স্বাভাবিক অফিস চলার পর সাটিফিকেট/মার্কসীট প্রদান করা হবে। নির্দিষ্ট সময়ের পূর্বে সরবরাহ চাইলে জরুরী ফিস জমা দিতে হবে সাময়িক সনদ ১ মাস এবং মূল সনদ, মার্কশীট ও ট্রান্সক্রিপ্ট ও মাসের মধ্যে গ্রহণ না করলে তা হারানো বা নষ্ট হয়ে গেলে সংশ্লিষ্ট দপ্তর বা কর্তৃপক্ষ দায়ী থাকবে না।</p>
                </div>

                <div className='mt-5 hind-siliguri-regular mx-5'>
                    <p className='font-bold'>শুধুমাত্র অফিসের ব্যাবহারের জন্য:</p>
                    <div className='flex justify-evenly mt-5'>
                        <p>
                            আমার মূল / সাময়িক সার্টিফিকেট / মার্কশীট বুঝিয়া পাইলাম।
                        </p>

                        <p>উপরোক্ত মূল/সাময়িক সার্টিফিকেট নং ............... প্রার্থীর হাতে সমর্পন করা গেল।</p>
                    </div>
                    <div className='flex justify-evenly mt-20'>
                        <p>------------------------ <br />
                            আবেদনকারীর স্বাক্ষর ও তারিখ
                        </p>

                        <p>------------------------ <br />সহকারীর স্বাক্ষর</p>
                    </div>
                </div>
                <FeeTable></FeeTable>
            </div>

            <div className='row text-center mt-5'>
                <Button onClick={downloadPDF}>Download PDF</Button>
            </div>

        </div>
    )
}

export default Pdf