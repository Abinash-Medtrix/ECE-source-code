

function DataManager()
{
    this.data = g_data;

    this.getRootContent = function () {
        var dt = JSON.stringify(this.data);
        var dt1 = JSON.parse(dt);
        return dt1;
    }

    this.getContentById = function (id) {

    }
    this.path = function (id) {
        var s = id;
        var arrayWord = [];
        var word1 = '';
        var word2 = '';
        var underscore = 1;
        for (var i = 0; i < s.length; i++) {
            console.log(s.charAt(i));
            arrayWord.push(s.charAt(i));
        }
        for (var i = 0 ; i <= arrayWord.length; i++) {
            if (arrayWord[i] == "_") {
                break;
            }
            word1 += arrayWord[i];
        }
        for (var i = 0 ; i <= arrayWord.length; i++) {
            if (arrayWord[i] == "_") {
                underscore++;
            }
            if (underscore == 3) {
                break;
            }
            word2 += arrayWord[i];
        }
    }

}


var _dataManager = new DataManager();

var menu = _dataManager.getRootContent();
console.log(menu.menu[0]);
