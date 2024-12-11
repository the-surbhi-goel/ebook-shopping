import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export async function getBookList(searchTerm) {
  const collectionRef = collection(db, "eBook");
  // let q1 = inStockOnly ?? where("in_stock", "==", inStockOnly);
  // const dramaQRef = query(collectionRef, where("in_stock", "==", inStockOnly));

  try {
    const data = await getDocs(collectionRef);

    let temp = [];
    let searchText;
    if (searchTerm) {
      searchText = searchTerm.toLowerCase();
    }
    data.docs.forEach((element) => {
      let data = element.data();
      if (searchTerm) {
        if (data.title.toLowerCase().indexOf(searchText) >= 0) {
          temp.push({
            ...data,
            id: element.id,
          });
        }
      } else {
        temp.push({
          ...data,
          id: element.id,
        });
      }
    });
    return temp;
  } catch (error) {
    console.log(error);
  }
}
