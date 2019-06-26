class Api::PokemonController < ApplicationController

  def show
    @poke = Pokemon.find(params[:id])
  end

  def index
    @pokemon = Pokemon.all.includes(:items)
  end

end
