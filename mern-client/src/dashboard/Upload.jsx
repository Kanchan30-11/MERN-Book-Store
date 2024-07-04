import React, { useState } from "react";

import { Button, Checkbox, Label, Select, TextInput,Textarea } from "flowbite-react";

const Upload = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Programming",
    "Mystery",
    "Science Fiction",
    "Fantacy",
    "Horroe",
    "Bibliography",
    "Autobiography",
    "Histpry",
    "Self-Caring",
    "Art",
    "Comics",
    "Romance"
  ];

  const [slectedBookCategory, setslectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangeSelectedValue = (event) => {
    //console.log(event.target.value)
    setslectedBookCategory(event.target.value);
  };
  const handleBookSubmit =(event)=> {
    event.preventDefault();
    const form=event.target;

    const bookTitle =form.bookTitle.value;
    const authorName =form.authorName.value;
    const imageUrl =form.imageUrl.value;
    const category =form.category.value;
    const bookDescription =form.bookDescription.value;
    const bookPDFURL =form.bookPDFURL.value;

    const bookObj={
      bookTitle,authorName,imageUrl,category,bookDescription,bookPDFURL
    }
    console.log(bookObj)
    //send data to db
    fetch("http://localhost:5000/uploadBook",{
      method:"POST",
      headers:{
        "Content-Ttype":"aapplication/json"
      },
      body:JSON.stringify(bookObj)
    }).then(res=>res.json()).then(data=>{
      //console.log(data)
      alert("Book Uploded Successfully!!!!")
      form.reset()
    }) 
 
  }

  return (
    <div className="px-4 my-12">
      {/*book name */}
      <h2 className="mb-8 text-3xl font-bold">Upload a book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1100px] flex-col flex-wrap gap-4">
        {/**first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              placeholder="Book Name"
              required
            />
          </div>
          {/*author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>
        {/**second row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image URL" />
            </div>
            <TextInput
              id="imageUrl"
              type="text"
              placeholder="Book Image Url"
              required
            />
          </div>
          {/*category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book CategoryName" />
            </div>

            <Select
              id="inputState"
              name="category"
              className="w-full rounded"
              value={setslectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {" "}
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/**book description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            placeholder="Write your book description here..."
            required
            rows={6}
            className="w-full"
          />
        </div>
        {/**book pdf link */}
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF Url" />
        </div>
        <TextInput id="bookPDFURL" type="text" placeholder="book pdf url" required shadow />
      </div>
      <Button type="submit" className="mt-5">Upload Book</Button>
      </form>
    </div>
  );
};

export default Upload;
