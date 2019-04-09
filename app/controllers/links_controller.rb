class LinksController < ApplicationController
  before_action :set_link, only: [:show, :update, :destroy]

  # GET /links
  # GET /links.json
  def index
    search = params[:search]

    if search.present?
    @links = Link.all.order.where("name ilike ?","%#{search}%")
    else
    @links = Link.all.order(created_at: :desc)
    end
  end

  # GET /links/1
  # GET /links/1.json
  def show
  end

  # POST /links
  # POST /links.json
  def create
    @link = current_user.links.new(link_params)

    if @link.save
      render :show, status: :created, location: @link
    else
      render json: @link.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /links/1
  # PATCH/PUT /links/1.json
  def update
    if @link.update(link_params)
      render :show, status: :ok, location: @link
    else
      render json: @link.errors, status: :unprocessable_entity
    end
  end

  # DELETE /links/1
  # DELETE /links/1.json
  def destroy
    @link.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_link
      @link = current_user.links.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def link_params
      params.require(:link).permit(:name, :url, :title, :description, :user_id)
    end
end
