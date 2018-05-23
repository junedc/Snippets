/// other json related

var $ajaxOtherRepo = $("#otherselect");


$ajaxOtherRepo.select2({
    tags: true,
    minimumInputLength: 1,
    minimumResultsForSearch: 10,
    ajax: {
        url: "https://jsonplaceholder.typicode.com/users",
        dataType: "json",
        type: "GET",
        data: function (params) {

            var queryParameters = {
                term: params.term
            }
            return queryParameters;
        },
        processResults: function (data) {
            return {
                results: $.map(data, function (item) {
                    return {
                        text: item.name,
                        id: item.id
                    }
                })
            };
        }
    }
}).on("change", function(e) {

   var lastValue = $("#otherselect option:last-child").val();
   var lastText = $("#otherselect option:last-child").text();              

   $('#selectedId').val(lastText);
   $('#selectedText').val(lastValue);
   
});


///  Github related


var $ajax = $("#selectgithub");

function formatRepo (repo) {
  
  if (repo.loading) return repo.text;
  console.log(repo.loading);
  var markup = "<div class='select2-result-repository clearfix'>" +
      "<div class='select2-result-repository__avatar'><img src='" + repo.owner.avatar_url + "' /></div>" +
      "<div class='select2-result-repository__meta'>" +
      "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";

  if (repo.description) {
    markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
  }

  markup += "<div class='select2-result-repository__statistics'>" +
    "<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> " + repo.forks_count + " Forks</div>" +
    "<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> " + repo.stargazers_count + " Stars</div>" +
    "<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> " + repo.watchers_count + " Watchers</div>" +
    "</div>" +
    "</div></div>";

  return markup;
}

function formatRepoSelection (repo) {
  $('#selectedId').val(repo.name);
  $('#selectedText').val(repo.name);
  return repo.name ;
}

$ajax.select2({
  ajax: {
    url: "https://api.github.com/search/repositories",  
    dataType: 'json',
    delay: 250,
    data: function (params) {      
      return {
        q: params.term
      };
    },
    processResults: function (data, params) {            
      return {
        results: data.items,
        pagination: {
          more: (1 * 30) < data.total_count
        }
      };
    },
    cache: true
  },
  escapeMarkup: function (markup) { return markup; },
  minimumInputLength: 1,
  templateResult: formatRepo,
  templateSelection: formatRepoSelection,
  theme: 'adwitt'
});




/// other json related

var $shopifyselect = $("#shopifyselect");

$shopifyselect.select2({
  
    minimumInputLength: 3,
    minimumResultsForSearch: 10,
    ajax: {
        url: "https://shopdealman.com/pages.json",
        dataType: "json",
        type: "GET",
        data: function (params) {

            var queryParameters = {
                q: params.term
            }
            return queryParameters;
        },
        processResults: function (data) {
            return {
                results: $.map(data, function (item) {
                    return {
                        text: item.title,
                        id: item.id
                    }
                })
            };
        }
    }
}).on("change", function(e) {

   var lastValue = $("#shopifyselect option:last-child").val();
   var lastText = $("#shopifyselect option:last-child").text();              

   $('#selectedId').val(lastText);
   $('#selectedText').val(lastValue);
   
});



function showAdminPagesUsingJavaScript(){
   
          $.ajax({
                type: "GET",                
                url: "https://treasure-hunt-test-1-localhost.myshopify.com/pages.json",
                dataType: "json",
                success: function(result) {
                   console.log(result);
                },
                error: function(e) {                  
                    console.log(e);                   
                }
            });
    
}                                  

