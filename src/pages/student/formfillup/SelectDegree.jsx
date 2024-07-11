import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const SelectDegree = () => {
  const [degree, setDegree] = useState("");
  const [degreeName, setDegreeName] = useState("");

  const handleDegree = (e) => {
    setDegree(e.target.value);
    if (e.target.value === "বি. এ (অনার্স)") {
      setDegreeName("B.A(Hons)");
    } else if (e.target.value === "বি. এস. সি (অনার্স)") {
      setDegreeName("B.Sc(Hons)");
    } else if (e.target.value === "বি. এস. সি(ইন্জিনিয়ারিং)") {
      setDegreeName("B.Sc.Engg");
    } else if (e.target.value === "বি. বি. এ") {
      setDegreeName("B.B.A");
    } else if (e.target.value === "এম. এ") {
      setDegreeName("M.A");
    } else if (e.target.value === "এম. এস. সি") {
      setDegreeName("M.Sc");
    } else if (e.target.value === "এম. এস. সি(ইন্জিনিয়ারিং)") {
      setDegreeName("M.Sc.Engg");
    } else if (e.target.value === "এম. বি. এ") {
      setDegreeName("M.B.A");
    } else if (e.target.value === "বি. ফার্ম ") {
      setDegreeName("B.Pharm");
    } else if (e.target.value === "এম. ফার্ম") {
      setDegreeName("M.Pharm");
    } else if (e.target.value === "এল. এল. বি (অনার্স)") {
      setDegreeName("L.L.B(Hons)");
    } else if (e.target.value === "এল. এল. এম") {
      setDegreeName("L.L.M");
    } else if (e.target.value === "বি. এস. এস (অনার্স)") {
      setDegreeName("B.S.S(Hons)");
    } else if (e.target.value === "এম. এস. এস") {
      setDegreeName("M.S.S");
    } else {
      setDegreeName("");
    }
  };
  return (
    <div>
      <div className="hind-siliguri-regular">
        <div className="mx-auto">
          <img className="mx-auto w-24 h-30" src="cu_logo.png" alt="" />
          <h1 className="text-xl font-bold mt-5">চট্টগ্রাম বিশ্ববিদ্যালয়</h1>
          <div className="flex flex-col mx-auto justify-center mt-5 mb-5">
            <label>
              <span className="text-black text-lg font-medium">
                কোন ডিগ্রির সনদের জন্য আবেদন করতে চান?
              </span>
            </label>
            <select
              required
              className="w-[180px] mx-auto mt-4 p-3 border-2 border-gray-300 rounded-xl"
              placeholder="সনদের ধরণ"
              value={degree}
              onChange={handleDegree}
            >
              <option value="" disabled selected>
                ---ডিগ্রি---
              </option>
              <option>বি. এ (অনার্স)</option>
              <option>বি. এস. সি (অনার্স)</option>
              <option>বি. এস. সি(ইন্জিনিয়ারিং)</option>
              <option>বি .বি. এ</option>
              <option>বি. এস. এস (অনার্স)</option>
              <option>এম. এস. এস</option>
              <option>এম. এ</option>
              <option>এম. এস. সি</option>
              <option>এম. এস. সি(ইন্জিনিয়ারিং)</option>
              <option>এম. বি. এ</option>
              <option>বি. ফার্ম</option>
              <option>এম. ফার্ম</option>
              <option>এল. এল. বি (অনার্স)</option>
              <option>এল. এল. এম</option>
            </select>
          </div>
        </div>
      </div>
      {degreeName ? (
        <Link to={`/payment/${degreeName}`}>
          <Button type="submit" className="mt-5">
            Go to Pay{" "}
          </Button>
        </Link>
      ) : (
        <Button type="submit" className="mt-5" disabled>
          Go to Pay{" "}
        </Button>
      )}
    </div>
  );
};

export default SelectDegree;
