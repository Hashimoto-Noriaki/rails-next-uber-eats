module Api
  module V1
    class OrdersController < ApplicationController
      def create
        posted_line_foods = LineFood.where(id: params[:line_food_ids])
        order = Order.new(
          restaurant_id: posted_line_foods.first.restaurant_id,
          total_price: total_price(posted_line_foods),
        )
        if order.save_with_update_line_foods!(posted_line_foods)
          render json: {}, status: :no_content
        else
          render json: {}, status: :internal_server_error
        end
      end
    end


  end
end