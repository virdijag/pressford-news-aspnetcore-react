using Microsoft.AspNetCore.Mvc;
using Articles.Data;
using System;

namespace Articles.Controllers
{
    [Route("api/[controller]")]
    public class ArticlesController : Controller
    {
        private readonly IArticleService articleService;
        public ArticlesController(IArticleService articleService)
        {
            this.articleService = articleService;
        }

        [HttpGet("[action]")]
        public IActionResult GetArticles()
        {
            var allArticles = this.articleService.GetAllArticles();
            return Ok(allArticles);
        }

        [HttpGet("SingleArticle/{id}")]
        public IActionResult GetArticleById(int id)
        {
            var article = this.articleService.GetArticleById(id);
            return Ok(article);
        }

        [HttpPost("AddArticle")]
        public IActionResult AddArticle([FromBody]Article article)
        {
            if (article != null)
            {
                this.articleService.AddArticle(article);
            }

            return Ok();
        }

        [HttpPut("UpdateTrip/{id}")]
        public IActionResult UpdateTrip(int id, [FromBody]Article article)
        {
            this.articleService.UpdateArticle(id, article);
            return Ok(article);
        }

        [HttpDelete("DeleteArticle/{id}")]
        public IActionResult DeleteArticle(int id)
        {
            this.articleService.DeleteArticle(id);
            return Ok();
        }     
    }
}