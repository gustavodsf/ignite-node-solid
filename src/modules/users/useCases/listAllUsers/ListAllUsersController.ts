import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      let { user_id } = request.headers;
      user_id = user_id.toString();
      const user = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}

export { ListAllUsersController };
