const Book = require("../models/Book");


const getAllBook = async (req, res) => {
    let book; 
    try {
        book = await Book.find();
          } catch (err) {
        console.log(err)
        res.status(500).json({message: "Book Can't be Fatch"})
    }
    if (!book) {
        res.status(404).json({message: "No Book Found"})
    }
    res.status(200).json({ book });
 
}
const InsertBook = async (req, res) => {
    const { name, author, description, price, available,image } = req.body;
  let book;
  try {
      book = new Book({
          name,
          author,
          description, 
          price,
          available, 
        image
          
      })
      await book.save();
    } catch (err) {
    console.log(err);
    }
    if (!book) {
         res.status(500).json({ message: "Book Can't be Inserted" });

    }
    res.status(200).json({ book });
 
};

const getBookById = async (req, res) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);  
    } catch (err) {
        console.log(err);
    }
       if (!book) {
         res.status(404).json({ message: "No Book Found" });
       }
       res.status(200).json({ book });
 
}
const updateBook = async (req, res) => {
    const id = req.params.id;
    const { name, author, description, price, available, image} = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        });
    book = await book.save();
        // res.status(200).json({book, message: "Book Has Been Updated" });

    } catch(err) {
        console.log(err);
        res.status(500).json({ message: "Book Can't be Updated" });

    }
      if (!book) {
        return res.status(404).json({ message: "Unable To Update By this ID" });
      }
      return res.status(200).json({ book });
}
const DeleteBook = async (req, res) => {
    let id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndDelete(id);
        res.status(200).json({ message: "Book Has been successfully Deleted" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Book Can't be Deleted!" });

    }
} 

module.exports.getAllBook = getAllBook
module.exports.InsertBook = InsertBook;
module.exports.updateBook = updateBook;
module.exports.DeleteBook = DeleteBook;
module.exports.getBookById = getBookById;