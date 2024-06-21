import React from 'react'

function DetailArticle(article) {
  return (
    <div>
      <div className="max-w-3xl mx-auto py-8">
        {/* <h1 className="text-3xl font-bold mb-4">{article.title}</h1> */}
        <img
          src={article.image}
          alt={article.title}
          className="rounded-lg mb-4"
        />
        <p className="text-gray-700">{article.description}</p>
        {/* Tambahkan elemen HTML lainnya untuk menampilkan informasi artikel */}
      </div>
    </div>
  );
}

export default DetailArticle