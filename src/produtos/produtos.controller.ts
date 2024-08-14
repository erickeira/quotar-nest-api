import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { CreateProdutoDto } from './dto/create-produto.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  create(@Body() reqProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(reqProdutoDto);
  }

  @Get()
  findAll() {
    return this.produtosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtosService.update(+id, updateProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosService.remove(+id);
  }
}
