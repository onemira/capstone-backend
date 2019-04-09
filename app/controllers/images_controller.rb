class ImagesController < ApplicationController
  before_action :set_image, only: [:show, :update, :destroy]

  # GET /images
  # GET /images.json
  def index
    search = params[:search]

    if search.present?
      @images = Image.all.order(created_at: :desc).where("description ilike ?","%#{search}%")
    else
      @images = Image.all.order(created_at: :desc)
    end
  end

  # GET /images/1
  # GET /images/1.json
  def show
  end

  # POST /images
  # POST /images.json
  def create
    @image = current_user.images.new(image_params)

    if @image.save
      render :show, status: :created, location: @image
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /images/1
  # PATCH/PUT /images/1.json
  def update
    if @image.update(image_params)
      render :show, status: :ok, location: @image
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  # DELETE /images/1
  # DELETE /images/1.json
  def destroy
    @image.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_image
      @image = current_user.images.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def image_params
      params.require(:image).permit(:url, :description, :user_id)
    end
end
