$(function () {
    var data = [{
        name: "Main_Page",
        code: "123321",
        url: "/index",
        lang: {
            ukr: {
                key1: "value1",
                key2: "value2",
                key3: "value3"
            } , 
            en: {

            }
            ,
            ru: {

            }
        },
        ver: 1,
        temp: "<html></html>",
        CSS: "*{ margin:0; padding:0; }",
        JS: "console.log(\"Hello world!\")"
    }
    ,
    {
        name: "Main_Page",
        code: "123321",
        url: "/index",
        lang: {
            ukr: {
                key1: "value1",
                key2: "value2",
                key3: "value3"
            } , 
            en: {

            }
            ,
            ru: {

            }
        },
        ver: 1,
        temp: "<html></html>",
        CSS: "*{ margin:0; padding:0; }",
        JS: "console.log(\"Hello world!\")"
    }
    ];

    var indexPage;
    var app3 = new Vue({
        el: '#pages_app',

        data: {
            showPageAddDisplay: '',
            showPageEditDisplay: '',
            showPageEditLandTemplate: '',
            pages: data,
            addName: "",
            addCode: "",
            addUrl: "",
            addVersion: "",
            editName: "",
            editCode: "",
            editUrl: "",
            editVersion: ""
        },

        methods: {

            //Open create page modal
            addPageShowModal: function () {
                this.showPageAddDisplay = 'block';
            },

            //Hide create page modal
            hideAddPageModal: function () {
                this.showPageAddDisplay = '';
            },

            //Open edit page modal
            editPageShowModal: function (e) {
                indexPage = e.target.dataset['index'];
                this.showPageEditDisplay = 'block';
            },

            //Hide edit page modal
            hideEditPageModal: function () {
                this.showPageEditDisplay = '';
            },

            //Add new page
            newPage: function () {
                data.push({
                    name: this.addName, code: this.addCode, ver: this.addVersion,
                    lang: [{ ukr: { key1: "value1" } }], url: this.addUrl, temp: "", CSS: "", JS: ""
                });
                this.showPageAddDisplay = '';
            },

            //Edit language template (Трохи був заплутався)
            btnEditValueLang: function () {
                this.showPageEditLandTemplate = "block";
                $('#dataLangTemp tbody tr').remove();
                var lang = data[indexPage].lang;

                for (var key in lang) {
                    var obj = lang[key];
                    // var keys = Object.keys(obj);
                    console.log(obj);

                    $("#dataLangTemp tbody").html($("#dataLangTemp tbody").html() + `
                <tr>
                <td>${key}</td>
                <td><button class=\"btnEditValueLang w3-btn\"><img src=\"edit_icon.png\"/></button></td>
                </tr>`);
                }

                // btnEditValueLang = $(".btnEditValueLang");
                // btnEditValueLang.click(function () {
                //     var tr = this.parentNode.parentNode;
                //     indexLang = tr.rowIndex - 1;
                //     editValueLangModal.css("display", "block");
                // });
            },

            //Close temlate language modal
            buttonCloseTL: function () {
                this.showPageEditLandTemplate = "";
            },

            //Submit edit page
            submitEdit: function () {
                var page = data[indexPage];

                page.name = this.editName;
                page.code = this.editCode;
                page.ver = this.editVersion;
                page.url = this.editUrl;
                page.temp = editorTemlate.getValue();
                page.CSS = editorCSS.getValue();
                page.JS = editorJS.getValue();

                this.showPageEditDisplay = '';
            },

            //Open edit HTML
            openETemp: function () {
                editTemlateModal.css("display", "block"); editorTemlate.getDoc().setValue(data[indexPage].temp);
            },

            //Open edit CSS
            openECSS: function () {
                editCSSModal.css("display", "block"); editorCSS.getDoc().setValue(data[indexPage].CSS);
            },

            //Open edit JS
            openEJS: function () {
                editJSModal.css("display", "block"); editorJS.getDoc().setValue(data[indexPage].JS);
            },

            //Hide edit HTML
            closeETemp: function () {
                editTemlateModal.css("display", "none");
            },

            //Hide edit CSS
            closeECSS: function () {
                editCSSModal.css("display", "none");
            },

            //Hide edit JS
            closeEJS: function () {
                editJSModal.css("display", "none");
            },
        }
    });

    var editTemlateModal = $("#editTemlateModal");
    var editCSSModal = $("#editCSSModal");
    var editJSModal = $("#editJSModal");

    var editorTemlate = CodeMirror(document.getElementById("textTemplate"), { mode: "xml", lineNumbers: true });
    var editorCSS = CodeMirror(document.getElementById("textCSS"), { mode: "css", lineNumbers: true });
    var editorJS = CodeMirror(document.getElementById("textJS"), { mode: "javascript", theme: "eclipse", lineNumbers: true });
});