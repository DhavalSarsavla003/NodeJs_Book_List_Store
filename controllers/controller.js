const BookModel = require('../models/model');

const defaultController =async (req, res) => {

    const books =await BookModel.find();
    res.render('index',{books,editedBook:null});
};

const addBook = async (req, res) => {

    const bookInstance =await new BookModel({
        name: req.body.name,
        author: req.body.author,
        price: req.body.price,
        description:req.body.description,
    });
    bookInstance.save();
    res.redirect('/');
};

const viewBook = async(req, res) => {
     let id = req.params.id;
     const singleBook =await BookModel.findById({_id:id});
    res.render('./pages/viewPage',{singleBook});
};

const editBook= async (req,res)=>{
   
   const id = req.params.id;
    const books = await  BookModel.find({});
    const editBook = await BookModel.findById({_id:id});
    res.render("index", { books, editBook });
}

const updateBook= async (req,res)=>{
    const id = req.params.id;
    let obj = {
        name: req.body.name,
        author: req.body.author,
        price: req.body.price,
        description: req.body.description
    }
    await BookModel.findByIdAndUpdate(id, obj);
    res.redirect("/");
}

const deleteBook =async (req,res)=>{
    let {id}=req.params;
    let deletedBook =await BookModel.findByIdAndDelete(id);
    res.redirect('/');
}

module.exports = { defaultController, addBook, viewBook ,editBook,updateBook,deleteBook};
