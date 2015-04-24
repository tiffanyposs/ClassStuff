class EntriesController < ApplicationController

	skip_before_filter  :verify_authenticity_token

	def index
		@entries = Entry.all
		respond_to do |format|
			format.html { render :index }
			format.json { render json: @entries }
		end
  	end




  	def new
  		@entry = Entry.new
 	end

	def create
	  @entry = Entry.create(entry_params)
	  redirect_to @entry
	end


	def show
		@entry = Entry.find_by(id: params[:id])
	end


	def destroy
		@entry = Entry.find_by(id: params[:id])
		@entry.destroy
		redirect_to entries_path
	end

	def edit
		@entry = Entry.find_by(id: params[:id])
	end

	def update
		@entry = Entry.find_by(id: params[:id])
		@entry.update_attributes(entry_params)
		redirect_to @entry
	end


	private
	  def entry_params
	  params.require(:entry).permit(:name, :ingredients, :instructions)
	end




end