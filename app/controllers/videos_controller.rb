class VideosController < ApplicationController
  before_action :set_video, only: [:show, :update, :destroy]

  # GET /videos
  # GET /videos.json
  def index
    search = params[:search]

    if search.present?
      @videos = Video.all.order(created_at: :desc).where("description ilike ?","%#{search}%")
    else
      @videos = Video.all.order(created_at: :desc)
    end
  end

  # GET /videos/1
  # GET /videos/1.json
  def show
  end

  # POST /videos
  # POST /videos.json
  def create
    @video = current_user.videos.new(video_params)

    if @video.save
      render :show, status: :created, location: @video
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /videos/1
  # PATCH/PUT /videos/1.json
  def update
    if @video.update(video_params)
      render :show, status: :ok, location: @video
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  # DELETE /videos/1
  # DELETE /videos/1.json
  def destroy
    @video.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_video
      @video = current_user.videos.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def video_params
      params.require(:video).permit(:name, :url, :description, :user_id)
    end
end
