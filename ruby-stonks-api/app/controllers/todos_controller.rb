class TodosController < ActionController::API
  before_action :set_todo, only: %i[ show update destroy ]
  before_action -> { doorkeeper_authorize! :read}

  # GET /todos
  # GET /todos.json
  def index
    @todos = Todo.all
  end

  # GET /todos/1
  # GET /todos/1.json
  def show
  end

  # POST /todos
  # POST /todos.json
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render :show, status: :created, location: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todos/1
  # PATCH/PUT /todos/1.json
  def update
    if @todo.update(todo_params)
      render :show, status: :ok, location: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  # DELETE /todos/1.json
  def destroy
    @todo.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def todo_params
      params.fetch(:todo, {})
    end
end
