'use strict';

const SaxonJS = require('saxon-js');

const map_params = new Map();
map_params.set('yah', true);

function named_template(params) {
  return {
    templateParams: params,
    initialTemplate: 'param-passer',
  }
}

function apply_templates(params) {
  return {
    stylesheetParams: params,
    sourceText: '<doc/>',
  }
}

function apply_templates_inital_params(params) {
  return {
    templateParams: params,
    sourceText: '<doc/>',
  }
}

function transform_arg(params, invocation) {
  return Object.assign(
    {
      stylesheetFileName: 'eg.sef.json',
      destination: 'raw',
      resultForm: 'xdm'
    },
    invocation(params)
  );
}

function run_template(params, invocation) {
  const result = SaxonJS.transform(transform_arg(params, invocation));
  return (result.principalResult !== null) ? result.principalResult[0].value : null;
}

test('Map params are passed to named template', () => {
  expect(run_template(map_params, named_template)).toEqual(true);
});

test('Object params are passed to named template', () => {
  expect(run_template({"yah": true}, named_template)).toEqual(true);
});

test('Map params are passed to apply-templates', () => {
  expect(run_template(map_params, apply_templates_inital_params)).toEqual(true);
});

test('Object params are passed to apply-templates', () => {
  expect(run_template({"yah": true}, apply_templates_inital_params)).toEqual(true);
});

test('Map params are passed to apply-templates using global params', () => {
  expect(run_template(map_params, apply_templates)).toEqual(true);
});

test('Object params are passed to apply-templates', () => {
  expect(run_template({"yah": true}, apply_templates)).toEqual(true);
});
