const db = require('../models');
const Quiz = db.quizzes;

// Create untuk menambah data
exports.create = async (req, res) => {

    try {
        const data = await Quiz.create(req.body)

        res.json({
            message: "quiz created succesfully.",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

// Update untuk mengubah data

exports.update = async(req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true})
        quiz.update(req.body, {
            where: {id}
        })

        res.json({
            message: "quizzes updated succesfully.",
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error occured while retrieving quiz",
            data: null,
        });
    }
}

// Delete untuk menghapus data

exports.delete = async(req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        quiz.destroy()

        res.json({
            message: "quiz deleted succesfully."
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error occured while retrieving quiz",
            data: null,
        });
    }
}

// Findone untuk mencari data berdasarkan id

exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        
        res.json({
            message: `Quizzes with id=${id}.`,
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error occured while retrieving quiz",
            data: null,
        });
    }
};

// Mengambil data dengan kategori tertentu

exports.getByCategoryId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where:  {
            categoryId: id
        }
    })

    req.json({
        message: `Quizzes with categoryId=${id}.`,   
        data: quizzes
    })
}

// Mengambil data dengan level tertentu

exports.getByLevelId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            levelId: id
        }
    })

    res.json({
        message: `Quizzes with levelId=${id}.`,
        data: quizzes,
    });
}

// Menampilkan semua data

exports.getAll = async (req, res) => {
    try {
        const quizzes = await Quiz.findAll()

        req.json({
            message: ""
        })
    } catch (error) {
        
    }
}