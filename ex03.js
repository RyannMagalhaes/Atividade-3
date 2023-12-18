//1 - Recupere todos os valores distintos da chave "NOME_TURNO_CURSO_BOLSA":
db.getCollection("prouni").distinct("NOME_TURNO_CURSO_BOLSA");

//2 - Recupere a quantidade total de valores distintos da chave "NOME_TURNO_CURSO_BOLSA":
db.getCollection("prouni").distinct("NOME_TURNO_CURSO_BOLSA").length;

//3 - Recupere a quantidade total de valores distintos da chave "NOME_CURSO_BOLSA":
db.getCollection("prouni").distinct("NOME_CURSO_BOLSA").length;

//4 - Recupere documentos da chave "NOME_IES_BOLSA" de acordo com as regras especificadas:
db.getCollection("prouni").find({
  $or: [
    { NOME_IES_BOLSA: /CEN/i },
    { NOME_IES_BOLSA: /UNI/i },
    { NOME_IES_BOLSA: /uni/i },
    { NOME_IES_BOLSA: /uti/i },
    { NOME_IES_BOLSA: /^UNI/ },
    { NOME_IES_BOLSA: /^INS/ },
    { NOME_IES_BOLSA: /^uNI/ },
    { NOME_IES_BOLSA: /OES$/ },
    { NOME_IES_BOLSA: /CEN.*uti/i },
    { NOME_IES_BOLSA: /tri.*TOd/i },
  ],
});

//5 - Recupere documentos em ordem crescente pela chave "ANO_CONCESSAO_BOLSA":
db.getCollection("prouni").find().sort({ ANO_CONCESSAO_BOLSA: 1 });

//6. Recupere documentos em ordem decrescente pela chave "idade":
db.getCollection("prouni").find().sort({ idade: -1 });

//7 - Recupere estudantes do turno "Vespertino" em 2009:
db.getCollection("prouni").find({
  NOME_TURNO_CURSO_BOLSA: "Vespertino",
  ANO_CONCESSAO_BOLSA: 2009,
});

//8 - Recupere estudantes do turno "Vespertino" em 2009 com limite de 5 documentos:
db.getCollection("prouni")
  .find({
    NOME_TURNO_CURSO_BOLSA: "Vespertino",
    ANO_CONCESSAO_BOLSA: 2009,
  })
  .limit(5);

//9 - Recupere documentos pelos IDs em ordem crescente:
var ids = [
  ObjectId("6504c39e22a4da449a1a5bf9"),
  ObjectId("6504c39822a4da449a15fed3"),
  ObjectId("6504c3bb22a4da449a333a20"),
];

db.getCollection("prouni")
  .find({ _id: { $in: ids } })
  .sort({ _id: 1 });

//10 - Recupere documentos em que as instituições de ensino comecem com "uni" com projeção específica:
db.getCollection("prouni").find(
  { NOME_IES_BOLSA: /^uni/ },
  {
    ANO_CONCESSAO_BOLSA: 1,
    TIPO_BOLSA: 1,
    MUNICIPIO_BENEFICIARIO_BOLSA: 1,
    _id: 0,
  }
);
