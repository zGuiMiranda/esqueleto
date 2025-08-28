import { FastifyReply } from "fastify/types/reply";
import { PageParams } from "../../ExampleRoutes.route";
import AbstractController from "./AbstractController";
import { ExampleUseCase } from "../usecase/Example";

export class ExampleController extends AbstractController {
  private exampleUseCase: ExampleUseCase = new ExampleUseCase();

  async getPaginated(params: PageParams, res: FastifyReply) {
    try {
      const page = this.parsePageable(params);

      const result = await this.exampleUseCase.execute(page);
      this.sendResponse(result, res);
    } catch (error) {
      this.handleError(error, res);
    }
  }


}
