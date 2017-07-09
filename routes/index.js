
module.exports = function(app){

  // Importa modulos nativos
  var rp = require('request-promise');
  var request = require('request');

  // Custom Modules
  var db = require('./../libs/connectdb.js')();

  var TOKEN_IMA = '6142abbe-71db-4a37-a182-f83b676afd04'

  app.get('/', function(req, res){

    res.render('atendimentos')

  })

  app.get('/atendimentos', function(req, res){

    res.render('atendimentos')

  })

  app.get('/dashboards', function(req, res){

    res.render('dashboards')

  })

   app.get('/atendimentos_dashboard', function(req, res){

    var requestOptions = {
      uri: 'http://apigateway.ima.sp.gov.br:8080/apiman-gateway/Hackathon/api/2.0/saude/atendimentos',
      qs:{
        apikey: TOKEN_IMA,
        pagina:1,
        limite:50
      },
      json: true
    }

    rp(requestOptions).then(function(response){

      var registros = []

      response.content.forEach(function(value, index){

        // var registro = {
        //   hora: value.hora,
        //   dataAtendimento: value.dataAtendimento,
        //   dataNascimento: value.dataNascimento,
        //   sexo: value.sexo,
        //   periodo: value.periodo,
        //   localVinculo: value.localVinculo,
        //   distritoAtendimento: value.distritoAtendimento,
        //   procedimento: value.procedimento

        // }

        registros.push(registro)

      })

      res.send(registros)
    })

  })

  app.get('/atendimentos_lista', function(req, res){

    var requestOptions = {
      uri: 'http://apigateway.ima.sp.gov.br:8080/apiman-gateway/Hackathon/api/2.0/saude/atendimentos',
      qs:{
        apikey: TOKEN_IMA,
        pagina:1,
        limite:50
      },
      json: true
    }

    rp(requestOptions).then(function(response){

      var registros = []

      response.content.forEach(function(value, index){

        var registro = {
          hora: value.hora,
          dataAtendimento: value.dataAtendimento,
          dataNascimento: value.dataNascimento,
          sexo: value.sexo,
          periodo: value.periodo,
          localVinculo: value.localVinculo,
          distritoAtendimento: value.distritoAtendimento,
          procedimento: value.procedimento

        }

        registros.push(registro)

      })

      res.send(registros)
    })

  })

  app.get('/atendimentos_mocado', function(req, res){

    var requestOptions = {
      uri: 'http://apigateway.ima.sp.gov.br:8080/apiman-gateway/Hackathon/api/2.0/saude/atendimentos',
      qs:{
        apikey: TOKEN_IMA,
        pagina:1,
        limite:100
      },
      json: true
    }

    rp(requestOptions).then(function(response){

      var listNames = [
        'Annabel',  
        'Myrtis',  
        'Kathryn',  
        'Mozelle',  
        'Dino',  
        'Danial',  
        'Rolf',  
        'Keven',  
        'Alease',  
        'Franklin',  
        'Timmy',  
        'Alleen',  
        'Shelly',  
        'Ellie',  
        'Corinne',  
        'Merlyn',  
        'Ping',  
        'Odell',  
        'Tameika',  
        'Era',  
        'Katlyn',  
        'Josefina',  
        'Tyson',  
        'Carolina',  
        'Reda',  
        'Precious',  
        'Vinita',  
        'Zachariah',  
        'Alise',  
        'Shayna',  
        'Katharyn',  
        'Sonya',  
        'Beaulah',  
        'Kandis',  
        'Edra',  
        'Julianne',  
        'Nathan',  
        'Alissa',  
        'Felicita',  
        'Jackeline',  
        'Dorie',  
        'Maye',  
        'Royce',  
        'Joi',  
        'Joseph',  
        'Berry',  
        'Adaline',  
        'Danyell',  
        'Norene',  
        'Earlean',
        'Merideth',  
        'Kellye',  
        'So',  
        'Viviana',  
        'Roxana',  
        'Elliott',  
        'Mignon',  
        'Shara',  
        'Georgia',  
        'Norene',  
        'Dallas',  
        'Maryrose',  
        'Fritz',  
        'Jarrett',  
        'Vanesa',  
        'Alicia',  
        'Tomasa',  
        'Loan',  
        'Brianne',  
        'Shawn',  
        'Rosalee',  
        'Karol',  
        'Gia',  
        'Alysia',  
        'Adena',  
        'Alecia',  
        'Lily',  
        'Dane',  
        'Shiloh',  
        'Genoveva',  
        'Charley',  
        'Deloras',  
        'Young',  
        'Hugo',  
        'Lindy',  
        'Maye',  
        'Evangeline',  
        'Duncan',  
        'Glendora',  
        'Brunilda',  
        'Meghann',  
        'Tianna',  
        'Molly',  
        'Iola',  
        'Luvenia',  
        'Cori',  
        'Cher',  
        'Freida',  
        'Mirna',  
        'Katelin'

      ]

      // Percorre os dados 
      response.content.forEach(function(value, index){

        console.log(value.id, listNames[index])

        var registro = {
          id_atendimento: value.id,
          name: listNames[index]
        }

        db.query('INSERT INTO tbl_pacientes SET ?', registro, function(err, results, fields){
          if(err){
            throw err
          }
          console.log('Registro mocado criado com sucesso')
        })

      })

      res.send(response)



    })


  })

  

}
