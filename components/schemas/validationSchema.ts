import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Поле обязательно для заполнения'),
  address: Yup.string().required('Поле обязательно для заполнения'),
  floor: Yup.number()
    .required('Поле обязательно для заполнения')
    .min(-1, 'Значение не может быть меньше -1')
    .max(Yup.ref('totalFloors'), 'Значение не может быть больше количества этажей в доме'),
  totalFloors: Yup.number()
    .required('Поле обязательно для заполнения')
    .min(3, 'Значение не может быть меньше 3')
    .max(200, 'Значение не может быть больше 200'),
  square: Yup.number()
    .required('Поле обязательно для заполнения')
    .min(0, 'Значение не может быть меньше 0')
    .max(400, 'Значение не может быть больше 400')
    .test('is-greater', 'Общая площадь должна быть больше суммы жилой площади и площади кухни', function(value) {
      const { livingSquare, kitchenSquare } = this.parent;
      return value > (livingSquare + kitchenSquare);
    }),
  livingSquare: Yup.number()
    .required('Поле обязательно для заполнения')
    .min(0, 'Значение не может быть меньше 0'),
  kitchenSquare: Yup.number()
    .required('Поле обязательно для заполнения')
    .min(0, 'Значение не может быть меньше 0'),
});

export default validationSchema;
