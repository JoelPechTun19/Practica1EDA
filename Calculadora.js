class CalculadoraGeometrica {
            constructor() {
                this.resultadoElement = document.getElementById("resultado");
                this.figuraElement = document.getElementById("figura");
                this.forms = document.querySelectorAll(".form");

                this.figuraElement.addEventListener("change", this.actualizarFormulario.bind(this));
                document.getElementById("Calcular").addEventListener("click", this.calcular.bind(this));
            }

            calcular() {
                const figura = this.figuraElement.value;
                let area, perimetro;

                switch (figura) {
                    case "rectangulo":
                        const baseRectangulo = parseFloat(document.getElementById("baseRectangulo").value);
                        const alturaRectangulo = parseFloat(document.getElementById("alturaRectangulo").value);
                        area = baseRectangulo * alturaRectangulo;
                        perimetro = 2 * (baseRectangulo + alturaRectangulo);
                        break;
                    case "circulo":
                        const radio = parseFloat(document.getElementById("radio").value);
                        area = Math.PI * radio * radio;
                        perimetro = 2 * Math.PI * radio;
                        break;
                    case "cuadrado":
                        const ladoCuadrado = parseFloat(document.getElementById("ladoCuadrado").value);
                        area = ladoCuadrado * ladoCuadrado;
                        perimetro = 4 * ladoCuadrado;
                        break;
                    case "triangulo":
                        const baseTriangulo = parseFloat(document.getElementById("baseTriangulo").value);
                        const alturaTriangulo = parseFloat(document.getElementById("alturaTriangulo").value);
                        area = (baseTriangulo * alturaTriangulo) / 2;
                        perimetro = 3 * baseTriangulo; // Perímetro de un triángulo equilátero
                        break;
                    default:
                        break;
                }

                this.resultadoElement.innerHTML = `Área: ${area.toFixed(2)} unidades cuadradas<br>Perímetro: ${perimetro.toFixed(2)} unidades`;
            }
            actualizarFormulario() {
                const selectedFigura = this.figuraElement.value;
                this.forms.forEach(form => {
                    if (form.id === selectedFigura) {
                        form.style.display = "block";
                    } else {
                        form.style.display = "none";
                    }
                });
            }
        }
        const calculadora = new CalculadoraGeometrica();