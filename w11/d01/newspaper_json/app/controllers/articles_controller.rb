class ArticlesController < ApplicationController
  def index
    @articles = Article.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @articles.map { |article|  
        Hash[article.id, Hash["headline", article.headline, 
          "content", article.content, "author", article.author.name]]  } }
    end
  end

  def new
    @article = Article.new
  end

  def create
    @article= Article.create(article_params)
    redirect_to article_path(@article)
  end

  def show
    @article = Article.find_by(id: params[:id])
  end

  def destroy
    @article = Article.find_by(id: params[:id])
    @article.destroy
    redirect_to articles_path
  end

  def edit
    @article = Article.find_by(id: params[:id])
  end

  def update
    @article = Article.find_by(id: params[:id])
    @article.update(article_params)
    redirect_to article_path(@article)
  end


  private
    def article_params
      params.require(:article).permit(:headline, :content, :photo_url)
    end


end
