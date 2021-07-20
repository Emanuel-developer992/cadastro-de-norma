//EXECUTAR AO CARREGAR A PÁGINA
window.onload = function() {
    
    if (getWKNumState() == 0) {
        hoje('dateEmi');
        idSeq();
    }
};

//DATA DE HOJE
function hoje(id) {

    // Obtém a data/hora atual
	var data = new Date();
	
    // Guarda cada pedaço em uma variável
    var dia = data.getDate();           // 1-31
    var mes = data.getMonth();          // 0-11 (zero=janeiro)
    var ano4 = data.getFullYear();      // 4 dígitos
    
    // Formata a data e a hora (note o mês + 1)

    if(mes > 9) {
        if (dia > 9) {
            var str_data = dia + '/' + (mes+1) + '/' + ano4;
        }
        var str_data = '0' + dia + '/' + (mes+1) + '/' + ano4;
    }
    else if (dia < 9) {
        var str_data = '0' + dia + '/' + '0' + (mes+1) + '/' + ano4;
    }
    else {
        var str_data = dia + '/' + '0' + (mes+1) + '/' + ano4;
    }

    $('#'+id).val(str_data);
    return str_data;

};

//ID Sequêncial

function idSeq() {

    var dataset = DatasetFactory.getDataset("DSFormulariodeCadastrodeNorma", null, null, null);

    var lengthDataset = dataset.values.length +1;

    $('#codeId').val('Nor-'+lengthDataset);
}