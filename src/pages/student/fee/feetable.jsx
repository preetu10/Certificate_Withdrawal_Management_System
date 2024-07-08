import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const invoices = [
    {
        invoice: "১।",
        paymentStatus: "মূল সনদপত্র নিয়মিত",
        paymentMethod: "৮০০",
    },
    {
        invoice: "২।",
        paymentStatus: "মূল সনদপত্র বহিরাগত",
        paymentMethod: "৯০০",
    },
    {
        invoice: "৩।",
        paymentStatus: "জরুরী ফিসসহ নিয়মিত",
        paymentMethod: "১২০০",
    },
    {
        invoice: "৪।",
        paymentStatus: "জরুরী ফিসসহ বহিরাগত",
        paymentMethod: "১৩০০",
    },
    {
        invoice: "৫।",
        paymentStatus: "ডুবলিকেট মূল সনদ",
        paymentMethod: "১৫০০",
    },
    {
        invoice: "৬।",
        paymentStatus: "দ্বিতীয় ডুবলিকেট মূল সনদ",
        paymentMethod: "২০০০",
    },
    {
        invoice: "৭।",
        paymentStatus: "সাময়িক সনদ পুরাতন বাংলা",
        paymentMethod: "২০০",
    },
    {
        invoice: "৮।",
        paymentStatus: "সাময়িক সনদ পুরাতন বাংলা বহিরাগত",
        paymentMethod: "২৫০",
    },
    {
        invoice: "৯।",
        paymentStatus: "সাময়িক সনদ ইংরেজি বহিরাগত",
        paymentMethod: "৪০০",
    },
    {
        invoice: "১০।",
        paymentStatus: "সাময়িক সনদ ইংরেজি পুরাতন",
        paymentMethod: "৩৫০",
    },
    {
        invoice: "১১।",
        paymentStatus: "সাময়িক সনদ ইংরেজি নতুন",
        paymentMethod: "৪০০",
    },
    {
        invoice: "১২।",
        paymentStatus: "নতুন ফল প্রকাশের সনদ (প্রথমবার)",
        paymentMethod: "১০০",
    },
    {
        invoice: "১৩।",
        paymentStatus: "ফল প্রকাশের সনদ দ্বিতীয়বার সাময়িক ",
        paymentMethod: "২০০",
    },
    {
        invoice: "১৪।",
        paymentStatus: "সাময়িক সনদ (ডুবলিকেট)",
        paymentMethod: "১১০০",
    },
    {
        invoice: "১৫।",
        paymentStatus: "সাময়িক সনদ (ডুবলিকেট) বহিরাগত ",
        paymentMethod: "১২০০",
    },
    {
        invoice: "১৬।",
        paymentStatus: "সত্যায়িত",
        paymentMethod: "৪০০",
    },
    {
        invoice: "১৭।",
        paymentStatus: "জরুরি (Attestation বেলায়)",
        paymentMethod: "৬০০",
    },
    {
        invoice: "১৮।",
        paymentStatus: "জরুরি (সাময়িক সনদপত্র বেলায়)",
        paymentMethod: "৩০০",
    },
    {
        invoice: "১৯।",
        paymentStatus: "ট্রিপলিকেট সাময়িক",
        paymentMethod: "১৫০০",
    },
    {
        invoice: "২০।",
        paymentStatus: "মার্কশিট ফি ",
        paymentMethod: "২২০",
    },
    {
        invoice: "২১।",
        paymentStatus: "জরুরি মার্কশিট ফি ",
        paymentMethod: "৪৪০",
    },
    {
        invoice: "২২।",
        paymentStatus: "মার্কশীট ফি (বিশ্ববিদ্যালয় কর্তৃপক্ষ কর্তৃক ভুল হলে ফল প্রকাশের তিন মাস পরে) ",
        paymentMethod: "১১০",
    },
    {
        invoice: "২৩।",
        paymentStatus: "পরীক্ষা কমিটি কর্তৃক মার্কশিট লিখন ও নিরীক্ষণ করা হলে 20 ও 22 নং উল্লেখিত ফি ",
        paymentMethod: "",
    },
]

export function FeeTable() {
    const firstHalf = invoices.slice(0, 12);
    const secondHalf = invoices.slice(12);
    return (
        <div>
            <h1 className="font-bold text-xl mb-5">ফিসের হারঃ</h1>
            <div className="lg:flex lg:flex-wrap border-2 border-black mx-5 justify-center">
                <div className="lg:w-1/2 md:w-full">
                    <Table className="border">
                        <TableHeader className="hind-siliguri-regular">
                            <TableRow>
                                <TableHead className="text-center border w-20">ক্রমিক নং</TableHead>
                                <TableHead className="text-center border">বিভিন্ন সনদপত্র ও মার্কশিটের খাত</TableHead>
                                <TableHead className="text-center border w-20">টাকা</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="hind-siliguri-regular">
                            {firstHalf.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                    <TableCell className="border">{invoice.invoice}</TableCell>
                                    <TableCell className="border">{invoice.paymentStatus}</TableCell>
                                    <TableCell className="">{invoice.paymentMethod}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="lg:w-1/2 md:w-full">
                    <Table className="border border-l-white">
                        <TableHeader className="hind-siliguri-regular">
                            <TableRow>
                                <TableHead className="text-center w-20">ক্রমিক নং</TableHead>
                                <TableHead className="text-center border">বিভিন্ন সনদপত্র ও মার্কশিটের খাত</TableHead>
                                <TableHead className="text-center border w-20">টাকা</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="hind-siliguri-regular">
                            {secondHalf.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                    <TableCell className="">{invoice.invoice}</TableCell>
                                    <TableCell className="border">{invoice.paymentStatus}</TableCell>
                                    <TableCell className="border">{invoice.paymentMethod}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

        </div>

    );
}